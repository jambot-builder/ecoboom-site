import { NextResponse } from "next/server";
import { sendQuoteEmail, type QuotePayload } from "@/lib/email";

export const runtime = "nodejs";

function asString(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  return s.length ? s : undefined;
}

export async function POST(req: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = asString(raw.name);
  const email = asString(raw.email);

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, message: "Name and email are required." },
      { status: 400 }
    );
  }

  // Basic email shape check.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "That email address looks off." },
      { status: 400 }
    );
  }

  const payload: QuotePayload = {
    name,
    email,
    company: asString(raw.company),
    phone: asString(raw.phone),
    eventDates: asString(raw.eventDates),
    location: asString(raw.location),
    gearNeeded: asString(raw.gearNeeded),
    message: asString(raw.message),
    submittedAt: new Date().toISOString(),
  };

  try {
    const result = await sendQuoteEmail(payload);
    return NextResponse.json({ ...result });
  } catch (err) {
    console.error("Quote send failed:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't send that just now. Please email us directly - we'll get right back.",
      },
      { status: 500 }
    );
  }
}
