import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MASH ELITE" },
      { name: "description", content: "Booking, payment and cancellation terms for MASH ELITE services." },
      { property: "og:title", content: "Terms & Conditions — MASH ELITE" },
      { property: "og:description", content: "Booking, payment and cancellation terms for MASH ELITE services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Terms &amp; conditions</h1>
      <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          A message sent through this website or WhatsApp is a booking inquiry, not a confirmed reservation. A booking
          is confirmed only when MASH ELITE confirms availability and the agreed payment conditions are met.
        </p>
        <p>
          Rates shown on this website are indicative. The final price for your dates, party size and room type is
          confirmed in writing by our team before payment.
        </p>
        <p>
          Payments are made as instructed in your written confirmation. Cancellation terms vary by property and are
          stated in your booking confirmation.
        </p>
        <p>
          Guests are responsible for the property and its contents during their stay and must follow the house rules
          of the booked property.
        </p>
      </div>
    </div>
  );
}
