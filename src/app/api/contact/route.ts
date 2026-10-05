import { Resend } from "resend";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// Best-effort throttle: a few messages per address every 10 minutes. It lives in the
// server's memory, so it resets on cold starts — enough to blunt a script hammering
// the form, not a substitute for a real limiter.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  // Only accept posts from the site's own pages
  const origin = request.headers.get("origin");
  const sameSite = (() => {
    try {
      return !origin || new URL(origin).host === request.headers.get("host");
    } catch {
      return false;
    }
  })();
  if (!sameSite) {
    return Response.json({ error: "Invalid request." }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip)) {
    return Response.json({ error: "Too many messages — please try again in a few minutes." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return Response.json({ error: "Invalid request." }, { status: 400 });

  // Honeypot: pretend success for bots
  if (str(body.website, 200)) return Response.json({ ok: true });

  const name = str(body.name, 200);
  const email = str(body.email, 320);
  const organization = str(body.organization, 200);
  const topic = str(body.topic, 200);
  const message = str(body.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please add your name, a valid email, and a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL");
    return Response.json({ error: "The form isn’t set up yet." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Organization", organization || "—"],
    ["Topic", topic || "—"],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;
  const html = `<table style="font-family:sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#6b6b66;padding-right:12px">${k}</td><td>${escape(v)}</td></tr>`)
    .join("")}</table><p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${escape(message)}</p>`;

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: email,
    subject: `srod.ca: ${topic || "New message"} — ${name}`,
    text,
    html,
  });

  if (error) {
    console.error("Resend error", error);
    return Response.json({ error: "Sorry, that didn’t send." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
