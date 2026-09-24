import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-malindi.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MASHA ELITE" },
      {
        name: "description",
        content:
          "MASHA ELITE is a property management company and coastal marketplace covering accommodation, real estate, tours and transport in Kenya.",
      },
      { property: "og:title", content: "About MASHA ELITE" },
      {
        property: "og:description",
        content: "Property management and a coastal marketplace across Malindi, Watamu, Kilifi and Vipingo.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative">
        <img src={heroImage} alt="Kenyan coast" width={1920} height={1088} className="h-[42vh] min-h-[300px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">About MASHA ELITE</h1>
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed">
          MASHA ELITE is a property management company and public accommodation marketplace on Kenya's north coast. We
          manage our own properties and carefully authorized third-party listings, and we connect guests, buyers and
          travellers through one team.
        </p>
        <div className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold">What we do</h2>
            <p className="mt-2 text-muted-foreground">
              Four connected services: accommodation bookings, real estate sales and viewings, tours and experiences
              with qualified partners, and transport coordination across the coast.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">How we work</h2>
            <p className="mt-2 text-muted-foreground">
              WhatsApp is how you reach us, but every inquiry is recorded and handled by staff. Availability is
              verified before any booking is confirmed — a message is the start of the conversation, not the
              confirmation itself.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Where we operate</h2>
            <p className="mt-2 text-muted-foreground">
              Malindi, Watamu, Kilifi, Vipingo and Diani, with safari connections to Tsavo East and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
