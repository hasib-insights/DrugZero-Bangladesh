import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { volunteerSchema, fieldErrors } from "@/lib/validation";

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

  const parsed = volunteerSchema.safeParse(body);
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
    const saved = await db.volunteerSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone ? data.phone : null,
        areaOfInterest: data.areaOfInterest,
        message: data.message ? data.message : null,
      },
    });

    // The submission is genuinely stored in the website database.
    // Email notifications require SMTP configuration — see DEPLOYMENT.md.
    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    console.error("[api/volunteer] Failed to store submission:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong while saving your application. Please try again, or reach us through the Contact page.",
      },
      { status: 500 }
    );
  }
}
