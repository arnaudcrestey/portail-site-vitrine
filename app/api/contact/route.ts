import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Le message est vide.' },
        { status: 400 }
      );
    }

    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT || 465);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!host || !user || !pass || !to) {
      return NextResponse.json(
        { success: false, error: 'Variables email manquantes.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"Site Arnaud Crestey" <${user}>`,
      to,
      subject: 'Nouveau message depuis arnaudcrestey.com',
      text: message,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">
          <h2>Nouveau message depuis arnaudcrestey.com</h2>
          <pre style="white-space:pre-wrap;font-family:Arial,sans-serif;">${message}</pre>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('CONTACT_API_ERROR', error);

    return NextResponse.json(
      { success: false, error: "Impossible d'envoyer le message." },
      { status: 500 }
    );
  }
}
