import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Mapping pro kurzy
const courseLabels: { [key: string]: string } = {
  'skupina-b': 'Skupina B - Osobní auto',
  'l17': 'L17 - Řízení od 17 let',
  'konzultace': 'Jen konzultace',
  '': 'Nevybráno'
};

export async function POST(request: Request) {
  const { name, email, phone, course, message } = await request.json();

  // Převod course ID na lidsky čitelný text
  const courseLabel = courseLabels[course] || course;

  try {
    const data = await resend.emails.send({
      from: 'Autoškola Falář <info@zephyron.tech>', 
      to: ['jan.vandlicek@gmail.com'],
      subject: `🚗 Nový formulář - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #374151;
                background-color: #f9fafb;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #007B9E 0%, #005a73 100%);
                color: #ffffff;
                padding: 32px 24px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                letter-spacing: -0.5px;
              }
              .header p {
                margin: 8px 0 0 0;
                font-size: 14px;
                opacity: 0.95;
              }
              .content {
                padding: 32px 24px;
              }
              .info-row {
                padding: 16px;
                margin-bottom: 12px;
                background-color: #f9fafb;
                border-left: 4px solid #007B9E;
                border-radius: 6px;
              }
              .info-label {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                color: #6b7280;
                letter-spacing: 0.5px;
                margin-bottom: 4px;
              }
              .info-value {
                font-size: 16px;
                color: #111827;
                font-weight: 500;
              }
              .message-box {
                background-color: #f3f4f6;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
                border: 1px solid #e5e7eb;
              }
              .message-box .info-label {
                margin-bottom: 8px;
              }
              .message-box .info-value {
                line-height: 1.6;
                white-space: pre-wrap;
              }
              .footer {
                background-color: #f9fafb;
                padding: 24px;
                text-align: center;
                font-size: 12px;
                color: #6b7280;
                border-top: 1px solid #e5e7eb;
              }
              .badge {
                display: inline-block;
                background-color: #007B9E;
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 600;
                margin-top: 8px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚗 AUTOŠKOLA FALÁŘ</h1>
                <p>Nová přihláška do kurzu</p>
              </div>
              
              <div class="content">
                <div class="info-row">
                  <div class="info-label">Jméno a příjmení</div>
                  <div class="info-value">${name}</div>
                </div>

                <div class="info-row">
                  <div class="info-label">E-mail</div>
                  <div class="info-value">${email}</div>
                </div>

                <div class="info-row">
                  <div class="info-label">Telefon</div>
                  <div class="info-value">${phone}</div>
                </div>

                <div class="info-row">
                  <div class="info-label">Zájem o kurz</div>
                  <div class="info-value">
                    ${courseLabel}
                  </div>
                </div>

                ${message ? `
                <div class="message-box">
                  <div class="info-label">💬 Zpráva od žadatele</div>
                  <div class="info-value">${message}</div>
                </div>
                ` : ''}
              </div>

              <div class="footer">
                <p><strong>Autoškola Falář</strong> • Vimperk</p>
                <p>Tento e-mail byl automaticky vygenerován z kontaktního formuláře</p>
              </div>
            </div>
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}