"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { interestAreas, volunteerSchema } from "@/lib/validation";
import { fieldErrors } from "@/lib/validation";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  message: string;
  website: string; // honeypot
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  areaOfInterest: "",
  message: "",
  website: "",
};

export function VolunteerForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const set = (key: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    const parsed = volunteerSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data: { ok?: boolean; message?: string; errors?: Record<string, string> } =
        await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("success");
        setValues(initialValues);
        setErrors({});
        return;
      }
      setErrors(data.errors ?? {});
      setStatus("error");
      setStatusMessage(
        data.message ??
          "Your application could not be saved. Please try again in a moment."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "A network problem prevented your application from being saved. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-border bg-brand-tint p-6 sm:p-8"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Thank you — your application has been received.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your details have been saved and our team will review them. We will
              reach out using the email address you provided. You can now close this
              page or explore more ways to support our work.
            </p>
            <Button className="mt-5" variant="outline" onClick={() => setStatus("idle")}>
              Submit another application
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const fieldError = (key: string) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 text-sm text-destructive">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {status === "error" && statusMessage && (
        <div
          role="alert"
          className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {statusMessage}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="v-name">
            Full name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="v-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={set("name")}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5"
          />
          {fieldError("name")}
        </div>
        <div>
          <Label htmlFor="v-email">
            Email address <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="v-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={set("email")}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1.5"
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="v-phone">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="v-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="01XXXXXXXXX"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={
              errors.phone ? "phone-error" : "phone-hint"
            }
            className="mt-1.5"
          />
          <p id="phone-hint" className="mt-1.5 text-xs text-muted-foreground">
            A Bangladeshi mobile number, e.g. 01712345678.
          </p>
          {fieldError("phone")}
        </div>
        <div>
          <Label htmlFor="v-area">
            Area of interest <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <div className="relative mt-1.5">
            <select
              id="v-area"
              name="areaOfInterest"
              required
              value={values.areaOfInterest}
              onChange={set("areaOfInterest")}
              aria-required="true"
              aria-invalid={!!errors.areaOfInterest}
              aria-describedby={errors.areaOfInterest ? "areaOfInterest-error" : undefined}
              className="flex h-10 w-full appearance-none rounded-lg border border-input bg-background px-3 py-2 pr-9 text-sm text-foreground shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive"
            >
              <option value="" disabled>
                Please select…
              </option>
              {interestAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {fieldError("areaOfInterest")}
        </div>
      </div>

      <div>
        <Label htmlFor="v-message">
          Short message <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="v-message"
          name="message"
          rows={4}
          placeholder="Tell us briefly why you would like to join, or ask us anything."
          value={values.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5"
        />
        {fieldError("message")}
      </div>

      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="v-website">Website</label>
        <input
          id="v-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set("website")}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Required fields are marked with *. We use your details only to respond to
          your application — see our{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
