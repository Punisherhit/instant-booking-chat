import { createFileRoute } from "@tanstack/react-router";
import { LISTINGS } from "@/data/catalogue";
import { ListingCard } from "@/components/cards";
import { WhatsAppIcon } from "@/components/chrome";
import { serviceEnquiryLink } from "@/lib/site";

export const Route = createFileRoute("/real-estate")({
  head: () => ({
    meta: [
      { title: "Property for Sale on the Kenyan Coast — MASHA ELITE" },
      {
        name: "description",
        content:
          "Beachfront villas, townhouses and apartments for sale in Kilifi, Malindi, Vipingo and Watamu. Arrange a viewing on WhatsApp.",
      },
      { property: "og:title", content: "Property for Sale on the Kenyan Coast — MASHA ELITE" },
      {
        property: "og:description",
        content: "Authorized coastal property listings with guided viewings arranged on WhatsApp.",
      },
    ],
  }),
  component: RealEstatePage,
});

function RealEstatePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Real Estate</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Authorized properties for sale along the coast. Every listing is reviewed by our team before publication, and
        viewings are arranged personally.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LISTINGS.map((l) => (
          <ListingCard key={l.slug} listing={l} />
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-card p-10 text-center">
        <h2 className="font-display text-2xl font-semibold">Looking for something specific?</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Tell us your budget, preferred town and must-haves — we track off-market and upcoming listings too.
        </p>
        <a
          href={serviceEnquiryLink(
            "Property Search",
            "I'm looking for property to buy on the coast. My requirements: ",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Tell us what you need
        </a>
      </div>
    </div>
  );
}
