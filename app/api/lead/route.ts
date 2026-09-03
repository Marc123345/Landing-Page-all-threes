import { NextResponse } from "next/server";

/**
 * Landing-page lead endpoint.
 *
 * IMPORTANT: set LEAD_WEBHOOK_URL in the Vercel project so leads actually go
 * somewhere — a GoHighLevel inbound webhook, a Zapier/Make hook, or any endpoint
 * that accepts JSON. Without it, submissions are accepted and logged but not
 * delivered anywhere, which is exactly how leads get lost.
 */

const REQUIRED = ["name", "phone", "email", "zip", "address", "jobType", "timeline"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const missing = REQUIRED.filter((k) => !String(body?.[k] ?? "").trim());
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const lead = {
    ...body,
    receivedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "",
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!webhook) {
    console.warn(
      "[lead] LEAD_WEBHOOK_URL is not set — this lead was NOT delivered anywhere:",
      JSON.stringify(lead)
    );
    // Still 200: the visitor did nothing wrong, and failing them helps nobody.
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] delivery failed:", err, JSON.stringify(lead));
    return NextResponse.json({ ok: true, delivered: false });
  }
}
