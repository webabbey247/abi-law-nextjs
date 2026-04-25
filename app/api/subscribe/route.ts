import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Please enter a valid email address.").required("Email is required."),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  try {
    await schema.validate(body);
  } catch (err) {
    const message = err instanceof yup.ValidationError ? err.message : "Validation failed.";
    return NextResponse.json({ error: message }, { status: 422 });
  }

  const { email } = body as { email: string };

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Lawyers Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL ?? process.env.SMTP_USER,
      subject: "New Newsletter Subscriber",
      text: `New subscriber: ${email}`,
      html: `<p>A new user subscribed to the newsletter:</p><p><strong>${email}</strong></p>`,
    });

    await transporter.sendMail({
      from: `"Lawyers" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "You're subscribed — Lawyers Newsletter",
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1a1a2e;">
          <h2 style="color: #1a1a2e;">Welcome to Lawyers</h2>
          <p>Thank you for subscribing. You'll be the first to hear about new programs, cohort openings, and legal insights from our team.</p>
          <p style="margin-top: 2rem; font-size: 0.85rem; color: #6b6b6b;">
            If you did not sign up for this newsletter, you can safely ignore this email.
          </p>
        </div>
      `,
    });
  } catch {
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
