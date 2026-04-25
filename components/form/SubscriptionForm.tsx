"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
});

type FormValues = yup.InferType<typeof schema>;

export default function SubscriptionForm() {
  const [serverStatus, setServerStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    setServerError("");
    setServerStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
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

  if (serverStatus === "success") {
    return (
      <div className="bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] px-5 py-4">
        <p className="text-sm text-secondary m-0">
          ✓ You&apos;re subscribed! Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Your email address"
          {...register("email")}
          className={`subscribe-input ${errors.email ? "error" : ""}`}
        />
        {errors.email && (
          <p className="text-[0.8rem] text-[#e05252] m-0">{errors.email.message}</p>
        )}
        {serverStatus === "error" && serverError && (
          <p className="text-[0.8rem] text-[#e05252] m-0">{serverError}</p>
        )}
        <button
          type="submit"
          disabled={serverStatus === "loading"}
          className={`bg-secondary py-3.5 px-8 text-base font-medium font-body rounded items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200 ${
            serverStatus === "loading" ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {serverStatus === "loading" ? "Subscribing…" : (
            <>
              Subscribe <ChevronRight className="inline w-3" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
