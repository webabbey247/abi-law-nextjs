"use client";

import { useForm, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { ThumbsUp } from "lucide-react";

const SUBJECTS = [
  "General Enquiry",
  "Case Consultation",
  "Corporate & Compliance",
  "Labor & Employment",
  "Intellectual Property",
  "Mergers & Acquisitions",
  "Business Taxation",
  "Dispute Resolution",
  "Other",
];

const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is required.")
    .min(2, "Too short.")
    .max(80),
  lastName: yup
    .string()
    .required("Last name is required.")
    .min(2, "Too short.")
    .max(80),
  email: yup
    .string()
    .email("Enter a valid email address.")
    .required("Email is required."),
  phone: yup.string().optional(),
  subject: yup.string().required("Please select a subject."),
  message: yup
    .string()
    .required("Message is required.")
    .min(10, "Message must be at least 10 characters."),
});

type FormValues = yup.InferType<typeof schema>;

const inputClass =
  "h-12 w-full rounded-sm border border-border bg-white px-4 font-body text-sm text-text outline-none transition-colors duration-200 placeholder:text-text-light/50 focus:border-[#0474C4]";

const errorClass = "font-body text-[0.75rem] text-[#e05252] mt-1";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className={errorClass}>{msg}</p>;
}

export default function ContactForm() {
  const [serverStatus, setServerStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
  });

  const onSubmit = async (values: FormValues) => {
    setServerError("");
    setServerStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong.");
        setServerStatus("error");
      } else {
        setServerStatus("success");
        reset();
      }
    } catch {
      setServerError("Network error. Please try again.");
      setServerStatus("error");
    }
  };

  return (
    <>
      {serverStatus === "success" ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center w-full">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500">
            <ThumbsUp className="w-9 h-9 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-2xl text-primary">Message Sent!</h3>
          <p className="font-body text-text-light max-w-sm">
            We&apos;ve received your message and will be in touch within 24–48
            hours.
          </p>
          <button
            onClick={() => setServerStatus("idle")}
            className="mt-2 font-body text-sm text-[#0474C4] underline underline-offset-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-5 w-full"
        >
          {/* Row 1: First / Last name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-body text-[0.68rem] uppercase tracking-widest text-text-light">
                First Name
              </label>
              <input
                {...register("firstName")}
                placeholder="First Name"
                className={`${inputClass} ${errors.firstName ? "border-[#e05252]" : ""}`}
              />
              <FieldError msg={errors.firstName?.message} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-body text-[0.68rem] uppercase tracking-widest text-text-light">
                Last Name
              </label>
              <input
                {...register("lastName")}
                placeholder="Last Name"
                className={`${inputClass} ${errors.lastName ? "border-[#e05252]" : ""}`}
              />
              <FieldError msg={errors.lastName?.message} />
            </div>
          </div>

          {/* Row 2: Email / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-body text-[0.68rem] uppercase tracking-widest text-text-light">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className={`${inputClass} ${errors.email ? "border-[#e05252]" : ""}`}
              />
              <FieldError msg={errors.email?.message} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-body text-[0.68rem] uppercase tracking-widest text-text-light">
                Mobile Number{" "}
                <span className="normal-case tracking-normal text-text-light/60">
                  (optional)
                </span>
              </label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="Mobile Number"
                className={inputClass}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="font-body text-[0.68rem] uppercase tracking-widest text-text-light">
              Subject of Interest
            </label>
            <select
              {...register("subject")}
              className={`${inputClass} ${errors.subject ? "border-[#e05252]" : ""} cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a subject…
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <FieldError msg={errors.subject?.message} />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="font-body text-[0.68rem] uppercase tracking-widest text-text-light">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Tell us more about your legal matter…"
              className={`w-full resize-none rounded-sm border px-4 py-3 font-body text-sm text-text bg-white outline-none transition-colors duration-200 placeholder:text-text-light/50 focus:border-[#0474C4] ${errors.message ? "border-[#e05252]" : "border-border"}`}
            />
            <FieldError msg={errors.message?.message} />
          </div>

          {serverStatus === "error" && serverError && (
            <p className="font-body text-sm text-[#e05252]">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={serverStatus === "loading"}
            className="self-start mt-2 h-12 rounded px-8 font-body text-[0.875rem] tracking-[0.02em] font-medium text-[#EBF3FC] bg-primary hover:bg-[#06457f] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            {serverStatus === "loading" ? (
              "Sending…"
            ) : (
              <>
                Send Message <span aria-hidden>›</span>
              </>
            )}
          </button>
        </form>
      )}
    </>
  );
}
