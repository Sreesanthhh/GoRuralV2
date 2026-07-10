import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire up real delivery (e.g. Resend, SendGrid, or Formspree) before launch.
  console.log("New contact enquiry:", { name, email, phone, message });

  return NextResponse.json({ ok: true });
}
