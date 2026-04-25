import nodemailer from "nodemailer";

export interface RequestCallPayload {
  firstName: string;
  lastName: string;
  mobile: string;
  timeToCall: string;
  timezone: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendRequestCallNotification(data: RequestCallPayload) {
  const transporter = createTransporter();
  const fullName = `${data.firstName} ${data.lastName}`;

  await transporter.sendMail({
    from: `"Lawyers" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL ?? process.env.SMTP_USER,
    subject: `Call Request — ${fullName}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
        <h2 style="color: #203253; margin-bottom: 1rem;">New Call Request</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Name:</td><td>${fullName}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Mobile:</td><td>${data.mobile}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Time to Call:</td><td>${data.timeToCall}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Timezone:</td><td>${data.timezone}</td></tr>
        </table>
      </div>
    `,
  });
}
