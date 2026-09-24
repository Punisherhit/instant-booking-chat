import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/chrome";
import { generalEnquiryLink, serviceEnquiryLink, SITE_EMAIL, SITE_PHONE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MASHA ELITE" },
      {
        name: "description",
        content:
          "Reach MASHA ELITE on WhatsApp for bookings, property viewings, tours and transfers along the Kenyan coast.",
      },
      { property: "og:title", content: "Contact MASHA ELITE" },
      { property: "og:description", content: "Bookings, viewings and travel questions — WhatsApp is fastest." },
    ],
  }),
  component: ContactPage,
});

const TOPICS = [
  { title: "Accommodation booking", key: "Accommodation" },
  { title: "Property viewing or sale", key: "Real Estate" },
  { title: "Tour or experience", key: "Experience" },
  { title: "Transfer or travel", key: "Transfer" },
  { title: "List your property", key: "Owner Application" },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Contact us</h1>
      <p className="mt-2 text-muted-foreground">
        WhatsApp is the fastest way to reach the team. Pick a topic and we'll open a chat with the details started
        for you.
      </p>

      <a
        href={generalEnquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-whatsapp px-8 py-5 text-lg font-semibold text-whatsapp-foreground shadow-sm transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon className="h-7 w-7" />
        Chat with us on WhatsApp
      </a>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {TOPICS.map((t) => (
          <a
            key={t.key}
            href={serviceEnquiryLink(t.key)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <span className="font-medium">{t.title}</span>
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-2 text-sm text-muted-foreground">
        <p>
          Call or WhatsApp us on{" "}
          <a href={`tel:+254745592258`} className="font-medium text-foreground">
            +254 745 592258
          </a>{" "}
          or <span className="font-medium text-foreground">{SITE_PHONE}</span>.
        </p>
        <p>
          Prefer email? Write to{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-foreground">
            {SITE_EMAIL}
          </a>
          . We reply during business hours, East Africa Time.
        </p>
      </div>
    </div>
  );
}
