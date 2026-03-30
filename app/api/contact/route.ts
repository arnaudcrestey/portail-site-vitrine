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
                border-collapse:collapse;
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
                    padding:32px 32px 18px 32px;
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
                    DIAGNOSTIC STRATÉGIQUE
                  </div>

                  <div
                    style="
                      font-family:Georgia,'Times New Roman',serif;
                      font-size:42px;
                      line-height:1.08;
                      font-weight:700;
                      color:#1f2740;
                      letter-spacing:-0.02em;
                      margin:0;
                    "
                  >
                    Votre demande a bien été reçue
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding:34px 32px 18px 32px;
                    font-family:Arial,sans-serif;
                    color:#33415c;
                    font-size:18px;
                    line-height:1.8;
                  "
                >
                  <p style="margin:0 0 22px 0;">${greeting}</p>

                  <p style="margin:0 0 22px 0;">
                    Merci pour votre demande.
                  </p>

                  <p style="margin:0 0 22px 0;">
                    J’ai bien reçu les éléments transmis via le diagnostic stratégique.
                  </p>

                  <p style="margin:0 0 22px 0;">
                    Je vais reprendre votre situation avec attention afin d’en dégager les points essentiels, puis vous adresser un retour personnalisé.
                  </p>

                  <div
                    style="
                      margin:30px 0 0 0;
                      padding:18px 20px;
                      border:1px solid #dbe3f0;
                      border-radius:16px;
                      background:#f8faff;
                      color:#4b5e87;
                      font-size:15px;
                      line-height:1.7;
                    "
                  >
                    Vous n’avez rien à faire de plus pour le moment. Votre demande est bien enregistrée.
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:8px 32px 0 32px;">
                  <div style="height:1px;background:#e5ebf5;"></div>
                </td>
              </tr>

              <tr>
                <td style="padding:28px 32px 34px 32px;text-align:center;">
                  <div
                    style="
                      font-family:Georgia,'Times New Roman',serif;
                      font-size:60px;
                      line-height:1;
                      color:#1f4a8a;
                      letter-spacing:-0.06em;
                      margin-bottom:14px;
                    "
                  >
                    AC
                  </div>

                  <div
                    style="
                      font-family:Arial,sans-serif;
                      font-size:16px;
                      line-height:1.5;
                      color:#4b5e87;
                      margin-bottom:8px;
                    "
                  >
                    Bien à vous,
                  </div>

                  <a
                    href="https://arnaudcrestey.com"
                    style="
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

    const safeMessage = escapeHtml(String(message).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeFirstName = escapeHtml(capitalizeFirstName(firstName) || "Non renseigné");

    await transporter.sendMail({
      from: `"Site Arnaud Crestey" <${user}>`,
      to,
      subject: "Nouveau message depuis arnaudcrestey.com",
      text: `Prénom : ${safeFirstName}\nEmail : ${safeEmail}\n\nMessage :\n${String(message).trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#1f2937;">
          <h2 style="margin:0 0 20px 0;color:#1f2740;">Nouveau message depuis arnaudcrestey.com</h2>

          <p style="margin:0 0 10px 0;"><strong>Prénom :</strong> ${safeFirstName}</p>
          <p style="margin:0 0 22px 0;"><strong>Email :</strong> ${safeEmail}</p>

          <div
            style="
              padding:18px 20px;
              border:1px solid #dbe3f0;
              border-radius:14px;
              background:#f8faff;
            "
          >
            <div style="font-weight:700;margin-bottom:10px;">Message</div>
            <div style="white-space:pre-wrap;">${safeMessage}</div>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Arnaud Crestey" <${user}>`,
      to: String(email).trim(),
      subject: "Votre demande a bien été reçue",
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
