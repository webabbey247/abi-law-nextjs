import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";
import { sendContactNotification, type ContactPayload } from "@/lib/mail/contactMailer";

const schema = yup.object({
  firstName: yup.string().required("First name is required.").min(2, "First name is too short.").max(80),
  lastName: yup.string().required("Last name is required.").min(2, "Last name is too short.").max(80),
  email: yup.string().email("Please enter a valid email address.").required("Email is required."),
  phone: yup.string().optional(),
  subject: yup.string().required("Please select a subject."),
  message: yup.string().required("Message is required.").min(10, "Message must be at least 10 characters."),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  try {
    await schema.validate(body, { abortEarly: true });
  } catch (err) {
    const message = err instanceof yup.ValidationError ? err.message : "Validation failed.";
    return NextResponse.json({ error: message }, { status: 422 });
  }

  try {
    await sendContactNotification(body as ContactPayload);
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
