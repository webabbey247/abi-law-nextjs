"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChevronRight } from "lucide-react";

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

type FormValues = yup.InferType<typeof schema>;

const TIMEZONES = [
  "UTC",
  "America/New_York (EST/EDT)",
  "America/Chicago (CST/CDT)",
  "America/Denver (MST/MDT)",
  "America/Los_Angeles (PST/PDT)",
  "America/Phoenix (MST)",
  "America/Anchorage (AKST/AKDT)",
  "Pacific/Honolulu (HST)",
  "Europe/London (GMT/BST)",
  "Europe/Paris (CET/CEST)",
  "Europe/Berlin (CET/CEST)",
  "Africa/Lagos (WAT)",
  "Africa/Nairobi (EAT)",
  "Asia/Dubai (GST)",
  "Asia/Kolkata (IST)",
  "Asia/Singapore (SGT)",
  "Asia/Tokyo (JST)",
  "Australia/Sydney (AEST/AEDT)",
];

interface Props {
  /** Visual style of the trigger button */
  variant?: "primary" | "outline-white" | "inline";
  className?: string;
}

export default function RequestCallModal({ variant = "primary", className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
  });

  const onSubmit = async (values: FormValues) => {
    setServerError("");
    try {
      const res = await fetch("/api/request-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setServerError("Something went wrong. Please try again.");
    }
  };

  const close = () => {
    setOpen(false);
    setSubmitted(false);
    setServerError("");
    reset();
  };

  const triggerClass =
    variant === "outline-white"
      ? `btn-outline-white ${className}`
      : variant === "inline"
      ? `font-body text-sm font-normal text-[#0474C4] rounded underline underline-offset-2 hover:bg-primary hover:text-white transition-colors duration-200 ${className}`
      : `bg-secondary py-3.5 px-8 text-base font-medium font-body rounded text-primary hover:bg-primary hover:text-white transition-colors duration-200 w-full ${className}`;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClass}>
        Free Consultation  <ChevronRight className="inline w-3" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-9999 flex min-h-screen items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#071639] px-8 py-7 flex items-start justify-between gap-6">
              <div className="flex flex-col gap-1.5">
                <p className="font-body text-[0.7rem] tracking-widest uppercase text-secondary/70">
                  Schedule a Call
                </p>
                <h2 className="font-display text-[1.6rem] font-semibold text-white leading-tight">
                  Request a <em className="italic text-[#0474C4]">Free Consultation</em>
                </h2>
                <p className="font-body text-[0.82rem] leading-[1.65] text-white/55 max-w-xs">
                  Fill in your details and one of our attorneys will call you at your preferred time — no obligation.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200 bg-transparent border-0 cursor-pointer"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="px-8 py-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0474C4]/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#0474C4] stroke-2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[1.3rem] font-semibold text-primary">Request Received!</h3>
                  <p className="font-body text-sm text-text-light leading-[1.7]">
                    Thank you! One of our attorneys will call you at your requested time.
                  </p>
                  <button type="button" onClick={close} className="btn-primary mt-2">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-[0.72rem] tracking-[0.07em] uppercase font-medium text-text-light">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("firstName")}
                        placeholder="Jane"
                        className={`font-body text-sm px-4 py-3 border rounded-sm outline-none transition-colors duration-200 focus:border-[#0474C4] ${errors.firstName ? "border-red-400" : "border-border"}`}
                      />
                      {errors.firstName && (
                        <span className="font-body text-[0.72rem] text-red-500">{errors.firstName.message}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-body text-[0.72rem] tracking-[0.07em] uppercase font-medium text-text-light">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("lastName")}
                        placeholder="Doe"
                        className={`font-body text-sm px-4 py-3 border rounded-sm outline-none transition-colors duration-200 focus:border-[#0474C4] ${errors.lastName ? "border-red-400" : "border-border"}`}
                      />
                      {errors.lastName && (
                        <span className="font-body text-[0.72rem] text-red-500">{errors.lastName.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[0.72rem] tracking-[0.07em] uppercase font-medium text-text-light">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("mobile")}
                      type="tel"
                      placeholder="+1 (212) 555-0100"
                      className={`font-body text-sm px-4 py-3 border rounded-sm outline-none transition-colors duration-200 focus:border-[#0474C4] ${errors.mobile ? "border-red-400" : "border-border"}`}
                    />
                    {errors.mobile && (
                      <span className="font-body text-[0.72rem] text-red-500">{errors.mobile.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[0.72rem] tracking-[0.07em] uppercase font-medium text-text-light">
                      Preferred Date &amp; Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("timeToCall")}
                      type="datetime-local"
                      className={`font-body text-sm px-4 py-3 border rounded-sm outline-none transition-colors duration-200 focus:border-[#0474C4] ${errors.timeToCall ? "border-red-400" : "border-border"}`}
                    />
                    {errors.timeToCall && (
                      <span className="font-body text-[0.72rem] text-red-500">{errors.timeToCall.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[0.72rem] tracking-[0.07em] uppercase font-medium text-text-light">
                      Preferred Timezone <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("timezone")}
                      className={`font-body text-sm px-4 py-3 border rounded-sm outline-none transition-colors duration-200 focus:border-[#0474C4] bg-white ${errors.timezone ? "border-red-400" : "border-border"}`}
                    >
                      <option value="">Select your timezone</option>
                      {TIMEZONES.map((tz) => (
                        <option key={tz} value={tz}>{tz}</option>
                      ))}
                    </select>
                    {errors.timezone && (
                      <span className="font-body text-[0.72rem] text-red-500">{errors.timezone.message}</span>
                    )}
                  </div>

                  {serverError && (
                    <p className="font-body text-[0.8rem] text-red-500">{serverError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-[0.6rem] rounded disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending…" : "Request a Call"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
