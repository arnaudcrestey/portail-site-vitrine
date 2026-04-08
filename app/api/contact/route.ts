import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

/* =========================
   SUPABASE (SAFE INIT)
========================= */
const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      )
    : null;

/* =========================
   HELPERS
========================= */
function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function capitalizeFirstName(value?: string) {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

/* =========================
   EMAILS HTML
========================= */
function buildAutoReplyHtml(firstName?: string) {
  const safeFirstName = escapeHtml(capitalizeFirstName(firstName));
  const greeting = safeFirstName ? `Bonjour ${safeFirstName},` : "Bonjour,";

  return `<div style="padding:20px;font-family:Arial;">${greeting}<br/><br/>Votre message a bien été reçu.</div>`;
}

function buildInternalEmailHtml(
  safeFirstName: string,
  safeEmail: string,
  safeMessage: string
) {
  return `
    <div style="padding:20px;font-family:Arial;">
      <strong>Prénom :</strong> ${safeFirstName}<br/>
      <strong>Email :</strong> ${safeEmail}<br/><br/>
      <strong>Message :</strong><br/>
      ${safeMessage}
    </div>
  `;
}

/* =========================
   API ROUTE
========================= */
export async function POST(req: Request) {
  try {
    const { message, email, firstName } = await req.json();

    if (!message || !String(message).trim()) {
      return NextResponse.json(
        { success: false, error: "Message vide." },
        { status: 400 }
      );
    }

    if (!email || !String(email).includes("@")) {
      return NextResponse.json(
        { success: false, error: "Email invalide." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 465),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const rawMessage = String(message).trim();

    const safeMessage = escapeHtml(rawMessage);
    const safeEmail = escapeHtml(String(email).trim());
    const safeFirstName = escapeHtml(
      capitalizeFirstName(firstName) || "Non renseigné"
    );

    /* ========= EMAIL ADMIN ========= */
    await transporter.sendMail({
      from: `"Site" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: "Nouveau message",
      html: buildInternalEmailHtml(
        safeFirstName,
        safeEmail,
        safeMessage
      ),
    });

    /* ========= EMAIL CLIENT ========= */
    await transporter.sendMail({
      from: `"Arnaud Crestey" <${process.env.EMAIL_USER}>`,
      to: String(email).trim(),
      subject: "Message reçu",
      html: buildAutoReplyHtml(firstName),
    });

    /* ========= INCREMENT SUPABASE ========= */
    if (supabase) {
      try {
        await supabase.rpc("increment_leads");
      } catch (e) {
        console.error("Supabase increment error", e);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR", error);

    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
