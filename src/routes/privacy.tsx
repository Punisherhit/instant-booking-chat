import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Notice — MASHA ELITE" },
      { name: "description", content: "How MASHA ELITE collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Notice — MASHA ELITE" },
      { property: "og:description", content: "How MASHA ELITE collects, uses and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Privacy notice</h1>
      <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          MASHA ELITE collects only the information needed to handle your inquiry or booking: your name, contact
          details, travel dates, party size and any preferences you share with us.
        </p>
        <p>
          When you contact us on WhatsApp, your message and number are handled under WhatsApp's own terms. We use your
          details to respond to your inquiry, verify availability, confirm bookings and coordinate services with the
          property or partner involved.
        </p>
        <p>
          We do not sell your personal information. Details are shared only with the property or service provider
          required to fulfil your booking, and only to the extent needed.
        </p>
        <p>
          You may ask us at any time to correct or delete the information we hold about you by contacting us on
          WhatsApp or by email.
        </p>
      </div>
    </div>
  );
}
