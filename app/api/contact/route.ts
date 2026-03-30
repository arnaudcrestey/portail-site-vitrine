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
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="border-collapse:collapse;background-color:#eef2f8;padding:26px 12px;"
      >
        <tr>
          <td align="center">
            <table
              width="100%"
              cellspacing="0"
              cellpadding="0"
              style="
                max-width:600px;
                border-collapse:separate;
                border-spacing:0;
                background:#ffffff;
                border:1px solid #dbe3f0;
                border-radius:20px;
                overflow:hidden;
                box-shadow:0 10px 28px rgba(31,39,64,0.05);
              "
            >
              <tr>
                <td style="padding:22px 26px 14px 26px;border-bottom:1px solid #e5ebf5;">
                  <div
                    style="
                      font-family:Arial,sans-serif;
                      font-size:11px;
                      letter-spacing:2px;
                      text-transform:uppercase;
                      color:#6c7ea6;
                      margin-bottom:8px;
                    "
                  >
                    Message reçu
                  </div>

                  <div
                    style="
                      font-family:Arial,sans-serif;
                      font-size:24px;
                      font-weight:600;
                      color:#1f2740;
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
                    padding:24px 26px 8px 26px;
                    font-family:Arial,sans-serif;
                    color:#33415c;
                    font-size:15px;
                    line-height:1.75;
                  "
                >
                  <p style="margin:0 0 16px 0;">${greeting}</p>

                  <p style="margin:0 0 16px 0;">
                    Merci pour votre message.
                  </p>

                  <p style="margin:0 0 16px 0;">
                    Votre demande est bien prise en compte.
                  </p>

                  <p style="margin:0 0 16px 0;">
                    Je reviens vers vous rapidement avec une réponse claire et structurée.
                  </p>

                  <p style="margin:0 0 22px 0;">
                    Chaque demande est analysée avec attention afin d’apporter une réponse réellement utile.
                  </p>

                  <p style="margin:0 0 14px 0;color:#5b6b8c;">
                    Bien à vous,
                  </p>

                  <div
                    style="
                      font-family:Georgia,'Times New Roman',serif;
                      font-size:36px;
                      line-height:0.95;
                      color:#1f4a8a;
                      margin-bottom:8px;
                    "
                  >
                    <span style="display:inline-block;">A</span><span style="display:inline-block;margin-left:-7px;">C</span>
                  </div>

                  <div
                    style="
                      font-family:Arial,sans-serif;
                      font-size:13px;
                      color:#6c7ea6;
                    "
                  >
                    arnaudcrestey.com
                  </div>
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
              font-family:Arial,sans-serif;
              font-size:28px;
              line-height:1.2;
              font-weight:700;
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
