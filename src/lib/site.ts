// Central MASH ELITE site configuration.
// TODO: replace with the official MASH ELITE business WhatsApp number
// (international format, no "+" or spaces) before launch.
export const WHATSAPP_NUMBER = "254700000000";

export const SITE_NAME = "MASH ELITE";
export const SITE_TAGLINE = "Discover. Stay. Explore.";
export const SITE_EMAIL = "hello@mashelite.co.ke";

/** Build a wa.me click-to-chat link with a prefilled, URL-encoded message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generalEnquiryLink(): string {
  return whatsappLink(
    `Hello MASH ELITE! I'd like to make an inquiry. Please assist. Thank you!`,
  );
}

export function bookingEnquiryLink(details: {
  property: string;
  location: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  roomType?: string;
  reference: string;
}): string {
  const lines = [
    "MASH ELITE Booking Inquiry",
    "",
    "Hello MASH ELITE! I'd like to inquire about a booking.",
    `Property: ${details.property}`,
    `Location: ${details.location}`,
    `Check-in: ${details.checkIn || "Flexible"}`,
    `Check-out: ${details.checkOut || "Flexible"}`,
    `Guests: ${details.adults ?? 2} adults${details.children ? `, ${details.children} children` : ""}`,
    details.roomType ? `Room: ${details.roomType}` : null,
    `Inquiry reference: ${details.reference}`,
    "",
    "Please confirm availability, the total price, and payment instructions. Thank you!",
  ].filter((l) => l !== null);
  return whatsappLink(lines.join("\n"));
}

export function serviceEnquiryLink(service: string, extra?: string): string {
  return whatsappLink(
    [
      `MASH ELITE ${service} Inquiry`,
      "",
      `Hello MASH ELITE! I'm interested in: ${service}.`,
      extra ?? "",
      "Please share availability, pricing and next steps. Thank you!",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

/** Client-side inquiry reference, e.g. ME-4F8K2Q. */
export function makeReference(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let ref = "";
  const buf = new Uint32Array(6);
  crypto.getRandomValues(buf);
  for (const n of buf) ref += chars[n % chars.length];
  return `ME-${ref}`;
}
