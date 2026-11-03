import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSchema, fieldErrors } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request. Please try again." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the highlighted fields and try again.",
        errors: fieldErrors(parsed.error),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot filled in → silently accept but do not store (bot mitigation).
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const saved = await db.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject ? data.subject : null,
        message: data.message,
      },
    });

    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    console.error("[api/contact] Failed to store submission:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong while sending your message. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
