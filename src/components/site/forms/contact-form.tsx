"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, fieldErrors } from "@/lib/validation";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot
};

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const set = (key: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
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
        data.message ?? "Your message could not be sent. Please try again in a moment."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "A network problem prevented your message from being sent. Please check your connection and try again."
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
              Message received — thank you.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your message has been saved and our team will read it as soon as we
              can. If you shared an email address, we will reply there.
            </p>
            <Button className="mt-5" variant="outline" onClick={() => setStatus("idle")}>
              Send another message
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
          <Label htmlFor="c-name">
            Full name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="c-name"
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
          <Label htmlFor="c-email">
            Email address <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </Label>
          <Input
            id="c-email"
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

      <div>
        <Label htmlFor="c-subject">
          Subject <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="c-subject"
          name="subject"
          type="text"
          placeholder="What is your message about?"
          value={values.subject}
          onChange={set("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="mt-1.5"
        />
        {fieldError("subject")}
      </div>

      <div>
        <Label htmlFor="c-message">
          Message <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </Label>
        <Textarea
          id="c-message"
          name="message"
          rows={5}
          required
          placeholder="Write your message here."
          value={values.message}
          onChange={set("message")}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5"
        />
        {fieldError("message")}
      </div>

      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="c-website">Website</label>
        <input
          id="c-website"
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
            "Send Message"
          )}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Required fields are marked with *. We use your details only to reply to
          your message — see our{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
