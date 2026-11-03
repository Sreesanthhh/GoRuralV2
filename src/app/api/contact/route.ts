import { NextResponse } from "next/server";
import { company } from "@/data/content";

/**
 * Delivery is configured with environment variables, set these in Vercel:
 *   RESEND_API_KEY     - API key from resend.com (free tier covers this volume)
 *   CONTACT_TO_EMAIL   - inbox that should receive enquiries
 *   CONTACT_FROM_EMAIL - verified sender, e.g. website@goruralindia.in
 *
 * Without them the route returns 503 rather than a cheerful 200. An enquiry
 * form that accepts a lead and throws it away is worse than one that is
 * visibly down, because nobody ever finds out.
 */
const MAX = { name: 120, email: 160, phone: 40, message: 4000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string
  );

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: a real person never fills a field they cannot see.
  if (clean(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const message = clean(body.message, MAX.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error(
      "[contact] Enquiry could not be delivered: RESEND_API_KEY and/or CONTACT_FROM_EMAIL are not set."
    );
    return NextResponse.json({ error: "unconfigured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not given"],
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        text: [
          ...rows.map(([k, v]) => `${k}: ${v}`),
          "",
          "Message:",
          message,
        ].join("\n"),
        html: [
          `<h2 style="font-family:sans-serif">New website enquiry</h2>`,
          `<table style="font-family:sans-serif;border-collapse:collapse">`,
          ...rows.map(
            ([k, v]) =>
              `<tr><td style="padding:4px 12px 4px 0"><strong>${k}</strong></td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
          ),
          `</table>`,
          `<p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(message)}</p>`,
        ].join(""),
      }),
    });

    if (!res.ok) {
      console.error("[contact] Delivery failed:", res.status, await res.text());
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Delivery threw:", err);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
