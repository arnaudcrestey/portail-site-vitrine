import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

function buildAutoReplyHtml(firstName?: string) {
  const safeFirstName = escapeHtml(capitalizeFirstName(firstName));
  const greeting = safeFirstName ? `Bonjour ${safeFirstName},` : "Bonjour,";

  return `
    <div style="margin:0;padding:0;background-color:#eef2f8;">
      <table
        role="presentation"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="border-collapse:collapse;background-color:#eef2f8;padding:32px 16px;"
      >
        <tr>
          <td align="center">
            <table
              role="presentation"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              style="
                max-width:720px;
                border-collapse:separate;
                border-spacing:0;
                background:#ffffff;
                border:1px solid #dbe3f0;
                border-radius:24px;
                overflow:hidden;
                box-shadow:0 18px 50px rgba(31,39,64,0.08);
              "
            >
              <tr>
                <td
                  style="
                    padding:32px 32px 20px 32px;
                    background:linear-gradient(180deg,#ffffff 0%,#f8faff 100%);
                    border-bottom:1px solid #e5ebf5;
                  "
                >
                  <div
                    style="
                      font-family:Arial,sans-serif;
                      font-size:12px;
                      letter-spacing:2.4px;
                      text-transform:uppercase;
                      color:#6c7ea6;
                      margin-bottom:14px;
                    "
                  >
                    ARNAUDCRESTEY.COM
                  </div>

                  <div
                    style="
                      font-family:Georgia,'Times New Roman',serif;
                      font-size:42px;
                      line-height:1.08;
                      font-weight:700;
                      color:#1f2740;
                      letter-spacing:-0.03em;
                      margin:0;
                    "
                  >
                    Votre message a bien été reçu
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding:34px 32px 10px 32px;
                    font-family:Arial,sans-serif;
                    color:#33415c;
                    font-size:18px;
                    line-height:1.85;
                  "
                >
                  <p style="margin:0 0 22px 0;">${greeting}</p>

                  <p style="margin:0 0 22px 0;">
                    Merci pour votre message.
                  </p>

                  <p style="margin:0 0 22px 0;">
                    J’ai bien reçu votre demande transmise depuis arnaudcrestey.com.
                  </p>

                  <p style="margin:0 0 22px 0;">
                    Je vais en prendre connaissance avec attention et revenir vers vous dès que possible avec une réponse adaptée à votre besoin.
                  </p>

                  <div
                    style="
                      margin:30px 0 0 0;
                      padding:16px 18px;
                      border:1px solid #dbe3f0;
                      border-radius:16px;
                      background:#f8faff;
                      color:#4b5e87;
                      font-size:15px;
                      line-height:1.7;
                    "
                  >
                    Merci encore pour votre message.
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:14px 32px 0 32px;">
                  <div style="height:1px;background:#e5ebf5;"></div>
                </td>
              </tr>

              <tr>
                <td style="padding:30px 32px 36px 32px;text-align:center;">
                  <div
                    style="
                      font-family:Georgia,'Times New Roman',serif;
                      font-size:58px;
                      line-height:1;
                      color:#1f4a8a;
                      letter-spacing:-0.06em;
                      margin-bottom:10px;
                    "
                  >
                    AC
                  </div>

                  <a
                    href="https://arnaudcrestey.com"
                    style="
                      display:inline-block;
                      font-family:Georgia,'Times New Roman',serif;
                      font-size:18px;
                      color:#1f4a8a;
                      text-decoration:underline;
                      text-underline-offset:3px;
                    "
                  >
                    arnaudcrestey.com
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function buildInternalEmailHtml(
  safeFirstName: string,
  safeEmail: string,
  safeMessage: string
) {
  return `
    <div style="margin:0;padding:24px;background:#eef2f8;font-family:Arial,sans-serif;color:#1f2937;">
      <div
        style="
          max-width:720px;
          margin:0 auto;
          background:#ffffff;
          border:1px solid #dbe3f0;
          border-radius:22px;
          overflow:hidden;
          box-shadow:0 18px 50px rgba(31,39,64,0.08);
        "
      >
        <div
          style="
            padding:28px 30px 20px 30px;
            background:linear-gradient(180deg,#ffffff 0%,#f8faff 100%);
            border-bottom:1px solid #e5ebf5;
          "
        >
          <div
            style="
              font-size:12px;
              letter-spacing:2.2px;
              text-transform:uppercase;
              color:#6c7ea6;
              margin-bottom:12px;
            "
          >
            NOUVEAU MESSAGE
          </div>

          <h2
            style="
              margin:0;
              font-family:Georgia,'Times New Roman',serif;
              font-size:34px;
              line-height:1.15;
              color:#1f2740;
              letter-spacing:-0.02em;
            "
          >
            Nouveau message depuis arnaudcrestey.com
          </h2>
        </div>

        <div style="padding:28px 30px 30px 30px;line-height:1.75;">
          <p style="margin:0 0 10px 0;"><strong>Prénom :</strong> ${safeFirstName}</p>
          <p style="margin:0 0 22px 0;"><strong>Email :</strong> ${safeEmail}</p>

          <div
            style="
              padding:18px 20px;
              border:1px solid #dbe3f0;
              border-radius:16px;
              background:#f8faff;
            "
          >
            <div style="font-weight:700;margin-bottom:10px;color:#1f2740;">Message</div>
            <div style="white-space:pre-wrap;line-height:1.75;color:#33415c;">${safeMessage}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const { message, email, firstName } = await req.json();

    if (!message || !String(message).trim()) {
      return NextResponse.json(
        { success: false, error: "Le message est vide." },
        { status: 400 }
      );
    }

    if (!email || !String(email).includes("@")) {
      return NextResponse.json(
        { success: false, error: "Adresse email invalide." },
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
        { success: false, error: "Variables email manquantes." },
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

    const rawMessage = String(message).trim();
    const safeMessage = escapeHtml(rawMessage);
    const safeEmail = escapeHtml(String(email).trim());
    const safeFirstName = escapeHtml(
      capitalizeFirstName(firstName) || "Non renseigné"
    );

    await transporter.sendMail({
      from: `"Site Arnaud Crestey" <${user}>`,
      to,
      subject: "Nouveau message depuis arnaudcrestey.com",
      text: `Prénom : ${safeFirstName}\nEmail : ${safeEmail}\n\nMessage :\n${rawMessage}`,
      html: buildInternalEmailHtml(safeFirstName, safeEmail, safeMessage),
    });

    await transporter.sendMail({
      from: `"Arnaud Crestey" <${user}>`,
      to: String(email).trim(),
      subject: "Votre message a bien été reçu",
      html: buildAutoReplyHtml(firstName),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);

    return NextResponse.json(
      { success: false, error: "Impossible d'envoyer le message." },
      { status: 500 }
    );
  }
}
