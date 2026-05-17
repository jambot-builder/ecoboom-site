/**
 * Email helper for outbound quote requests.
 *
 * Uses Resend (resend.com) when RESEND_API_KEY is set. Otherwise it logs the
 * submission to the server console - useful for local dev before Resend
 * is wired up.
 */
export type QuotePayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  eventDates?: string;
  location?: string;
  gearNeeded?: string;
  message?: string;
  submittedAt: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function sendQuoteEmail(payload: QuotePayload) {
  const recipient = process.env.QUOTE_RECIPIENT_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL || "quotes@ecoboom.org";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `New quote request - ${payload.name}${
    payload.company ? ` (${payload.company})` : ""
  }`;

  const body = renderBody(payload);

  // Dev fallback: no API key configured.
  if (!apiKey || !recipient) {
    console.log("\n=== Quote request (no email sent - missing env) ===");
    console.log("To:", recipient || "(QUOTE_RECIPIENT_EMAIL not set)");
    console.log("Subject:", subject);
    console.log(body);
    console.log("=========================================\n");
    return { ok: true, sent: false };
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: payload.email,
      subject,
      text: body,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend error ${res.status}: ${errText}`);
  }

  return { ok: true, sent: true };
}

function renderBody(p: QuotePayload) {
  return [
    `New quote request from ${p.name}`,
    p.company ? `Company:      ${p.company}` : null,
    `Email:        ${p.email}`,
    p.phone ? `Phone:        ${p.phone}` : null,
    p.eventDates ? `Event dates:  ${p.eventDates}` : null,
    p.location ? `Location:     ${p.location}` : null,
    "",
    "Gear / scope:",
    p.gearNeeded || "(none specified)",
    "",
    "Notes:",
    p.message || "(none)",
    "",
    `Submitted:    ${p.submittedAt}`,
  ]
    .filter(Boolean)
    .join("\n");
}
