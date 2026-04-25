import { NextResponse } from "next/server";
import * as yup from "yup";
import { sendRequestCallNotification } from "@/lib/mail/requestCallMailer";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  mobile: yup
    .string()
    .matches(/^[+\d\s\-().]{7,20}$/, "Enter a valid phone number")
    .required("Mobile number is required"),
  timeToCall: yup.string().required("Please select a date and time"),
  timezone: yup.string().required("Please select a timezone"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await schema.validate(body, { abortEarly: false });
    await sendRequestCallNotification(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return NextResponse.json({ errors: err.errors }, { status: 422 });
    }
    console.error("request-call error:", err);
    return NextResponse.json({ error: "Failed to send request" }, { status: 500 });
  }
}
