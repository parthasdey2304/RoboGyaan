import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{6,15}$/;

function ok<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status });
}

function fail(message: string, status = 400, details?: Record<string, string>) {
  return NextResponse.json({ ok: false, error: { message, details } }, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid JSON body");
  }

  if (typeof body !== "object" || body === null) {
    return fail("Invalid request payload");
  }

  const raw = body as Record<string, unknown>;

  if (typeof raw.website === "string" && raw.website.length > 0) {
    return ok({ received: true });
  }

  const str = (key: string) => (typeof raw[key] === "string" ? (raw[key] as string).trim() : "");

  const schoolName = str("schoolName");
  const contactPerson = str("contactPerson");
  const city = str("city");
  const phone = str("phone");
  const email = str("email").toLowerCase();
  const message = str("message");

  const details: Record<string, string> = {};
  if (!schoolName) details.schoolName = "School name is required";
  if (!contactPerson) details.contactPerson = "Contact person is required";
  if (!city) details.city = "City is required";
  if (!PHONE_RE.test(phone)) details.phone = "A valid phone number is required";
  if (!EMAIL_RE.test(email)) details.email = "A valid email is required";

  if (Object.keys(details).length > 0) {
    return fail("Validation failed", 422, details);
  }

  const enquiry = {
    schoolName,
    contactPerson,
    city,
    phone,
    email,
    message,
    source: "web-landing",
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.CONTACT_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(enquiry),
      });
    } catch {
      return fail("Could not submit your enquiry right now. Please email hello@robogyaan.in", 502);
    }
  }

  return ok({ received: true }, 201);
}
