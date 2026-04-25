import nodemailer from "nodemailer";

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
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

export async function sendContactNotification(data: ContactPayload) {
  const transporter = createTransporter();
  const fullName = `${data.firstName} ${data.lastName}`;

  await transporter.sendMail({
    from: `"Lawyers Contact" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL ?? process.env.SMTP_USER,
    subject: `New Enquiry — ${data.subject} from ${fullName}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
        <h2 style="color: #203253; margin-bottom: 1rem;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Name:</td><td>${fullName}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Email:</td><td>${data.email}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Phone:</td><td>${data.phone || "—"}</td></tr>
          <tr><td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">Subject:</td><td>${data.subject}</td></tr>
        </table>
        <hr style="margin: 1.25rem 0; border-color: #e2e0d8;" />
        <p style="font-size: 0.95rem; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
      </div>
    `,
  });

  await transporter.sendMail({
    from: `"Lawyers" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: "We've received your message — Lawyers",
    html: `
      <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1a1a2e;">
        <h2 style="color: #203253;">Thank you, ${data.firstName}!</h2>
        <p>We've received your enquiry regarding <strong>${data.subject}</strong> and one of our attorneys will be in touch within 24–48 hours.</p>
        <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #6b6b6b;">
          For urgent matters, please call us directly at <strong>(212) 587-0127</strong>.
        </p>
        <hr style="margin: 1.5rem 0; border-color: #e2e0d8;" />
        <p style="font-size: 0.8rem; color: #6b6b6b;">Lawyers — The #1 Law Firm in Los Angeles, CA</p>
      </div>
    `,
  });
}
