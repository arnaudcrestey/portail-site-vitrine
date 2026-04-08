import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

/* ========= SUPABASE ========= */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/* ========= API ========= */
export async function POST(req: Request) {
  try {
    const { message, email, firstName } = await req.json();

    if (!message || !email) {
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
      text: message,
    });

    /* ========= EMAIL CLIENT ========= */
    await transporter.sendMail({
      from: `"Arnaud Crestey" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Message reçu",
      text: "Votre message a bien été reçu.",
    });

    /* ========= INCREMENT ========= */
    await supabase.rpc("increment_leads");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
