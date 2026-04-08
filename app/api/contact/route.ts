import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

/* ========= SUPABASE ========= */
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildAdminEmail({
  firstName,
  email,
  message,
}: {
  firstName?: string;
  email: string;
  message: string;
}) {
  const safeFirstName = escapeHtml(firstName?.trim() || "Non renseigné");
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouveau message</title>
  </head>
  <body style="margin:0; padding:0; background:#f3f6fb; font-family:Arial, Helvetica, sans-serif; color:#14213d;">
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background:#f3f6fb; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:680px; background:#ffffff; border:1px solid #dbe4f0; border-radius:24px; overflow:hidden;">
            <tr>
              <td style="padding:24px 28px 8px 28px;">
                <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#6b7a90; margin-bottom:12px;">
                  Nouveau message site
                </div>
                <h1 style="margin:0; font-size:28px; line-height:1.2; font-weight:700; color:#14213d;">
                  Nouvelle demande reçue
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px 32px 28px;">
                <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:0 0 14px 0; font-size:14px; color:#6b7a90;">Prénom</td>
                    <td style="padding:0 0 14px 0; font-size:15px; color:#14213d; font-weight:600;">${safeFirstName}</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 14px 0; font-size:14px; color:#6b7a90;">Email</td>
                    <td style="padding:0 0 14px 0; font-size:15px; color:#14213d; font-weight:600;">${safeEmail}</td>
                  </tr>
                </table>

                <div style="margin-top:18px; padding:20px; border:1px solid #dbe4f0; border-radius:18px; background:#f8fbff;">
                  <div style="font-size:12px; letter-spacing:1.6px; text-transform:uppercase; color:#6b7a90; margin-bottom:10px;">
                    Message
                  </div>
                  <div style="font-size:16px; line-height:1.75; color:#14213d;">
                    ${safeMessage}
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

function buildClientEmail({ firstName }: { firstName?: string }) {
  const safeFirstName = escapeHtml(firstName?.trim() || "");
  const greeting = safeFirstName ? `Bonjour ${safeFirstName},` : "Bonjour,";

  return `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Votre message a bien été reçu</title>
  </head>
  <body style="margin:0; padding:0; background:#eef3fb; font-family:Arial, Helvetica, sans-serif; color:#14213d;">
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background:#eef3fb; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:700px; background:#ffffff; border:1px solid #d9e3f2; border-radius:28px; overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 14px 32px;">
                <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#6f7f97; margin-bottom:14px;">
                  Message reçu
                </div>
                <h1 style="margin:0; font-size:22px; line-height:1.3; color:#14213d; font-weight:700;">
                  Votre message a bien été reçu
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding:0 32px 32px 32px;">
                <div style="font-size:16px; line-height:1.9; color:#1d2b45;">
                  <p style="margin:0 0 18px 0;">${greeting}</p>

                  <p style="margin:0 0 18px 0;">
                    Merci pour votre message.
                  </p>

                  <p style="margin:0 0 18px 0;">
                    Votre demande est bien prise en compte.
                  </p>

                  <p style="margin:0 0 18px 0;">
                    Je reviens vers vous rapidement avec une réponse claire et structurée.
                  </p>

                  <p style="margin:0;">
                    Chaque demande est analysée avec attention afin d’apporter une réponse réellement utile.
                  </p>
                </div>

                <div style="margin-top:34px; padding-top:28px; border-top:1px solid #d9e3f2; text-align:center;">
                  <p style="margin:0 0 16px 0; font-size:16px; color:#4c5d78;">
                    Bien à vous,
                  </p>

                  <div style="font-family:Georgia, 'Times New Roman', serif; font-size:44px; line-height:1; color:#1c4fa3; margin-bottom:8px;">
                    AC
                  </div>

                  <a
                    href="https://arnaudcrestey.com"
                    style="font-size:14px; color:#1c4fa3; text-decoration:underline;"
                  >
                    arnaudcrestey.com
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

/* ========= API ========= */
export async function POST(req: Request) {
  try {
    const { message, email, firstName } = await req.json();

    const safeMessage = String(message ?? "").trim();
    const safeEmail = String(email ?? "").trim();
    const safeFirstName = String(firstName ?? "").trim();

    if (!safeMessage || !safeEmail) {
      return NextResponse.json({ success: false }, { status: 400 });
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

    /* ========= EMAIL ADMIN ========= */
    await transporter.sendMail({
      from: `"Site" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: "Nouveau message",
      text: `Nouveau message reçu

Prénom : ${safeFirstName || "Non renseigné"}
Email : ${safeEmail}

Message :
${safeMessage}`,
      html: buildAdminEmail({
        firstName: safeFirstName,
        email: safeEmail,
        message: safeMessage,
      }),
    });

    /* ========= EMAIL CLIENT ========= */
    await transporter.sendMail({
      from: `"Arnaud Crestey" <${process.env.EMAIL_USER}>`,
      to: safeEmail,
      subject: "Votre message a bien été reçu",
      text: `${safeFirstName ? `Bonjour ${safeFirstName},` : "Bonjour,"}

Merci pour votre message.

Votre demande est bien prise en compte.

Je reviens vers vous rapidement avec une réponse claire et structurée.

Chaque demande est analysée avec attention afin d’apporter une réponse réellement utile.

Bien à vous,
arnaudcrestey.com`,
      html: buildClientEmail({
        firstName: safeFirstName,
      }),
    });

    /* ========= INCREMENT ========= */
    console.log("[CONTACT] Tentative increment_leads");
    console.log("[CONTACT] SUPABASE URL présente :", !!process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("[CONTACT] SERVICE ROLE présente :", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
    console.log(
      "[CONTACT] SERVICE ROLE préfixe :",
      process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 12)
    );

    const { data: metricData, error: metricError } = await supabaseAdmin.rpc("increment_leads");

    if (metricError) {
      console.error("[CONTACT] Erreur increment_leads :", {
        message: metricError.message,
        details: metricError.details,
        hint: metricError.hint,
        code: metricError.code,
      });
    } else {
      console.log("[CONTACT] increment_leads OK :", metricData);
    }

    console.log("[CONTACT] POST terminé avec succès");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT] Erreur globale route contact :", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
