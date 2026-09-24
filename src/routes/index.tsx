import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-malindi.jpg";
import { DESTINATIONS, EXPERIENCES, LISTINGS, STAYS } from "@/data/catalogue";
import { ExperienceCard, ListingCard, StayCard } from "@/components/cards";
import { WhatsAppIcon } from "@/components/chrome";
import { generalEnquiryLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MASHA ELITE — Coastal Stays, Property & Tours in Kenya" },
      {
        name: "description",
        content:
          "Find villas, apartments, B&Bs and hotels in Malindi, Watamu, Kilifi and Vipingo. Real estate, safaris and transfers too — book instantly on WhatsApp.",
      },
      { property: "og:title", content: "MASHA ELITE — Coastal Stays, Property & Tours in Kenya" },
      {
        property: "og:description",
        content:
          "Villas, apartments and hotels on Kenya's north coast, plus property sales, tours and transfers. Book on WhatsApp.",
      },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { title: "Accommodation", body: "Villas, apartments, B&Bs and hotels along the coast, verified before publication." },
  { title: "Real Estate", body: "Authorized properties for sale, with guided viewings and honest pricing." },
  { title: "Tours & Experiences", body: "Dhow cruises, marine park snorkelling and Tsavo safaris with qualified partners." },
  { title: "Transport & Travel", body: "Airport transfers, itineraries and safari connections through approved providers." },
];

function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Aerial view of the Kenyan coast at sunset"
          width={1920}
          height={1088}
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl animate-fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Kenya's North Coast</p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-balance text-primary-foreground sm:text-6xl">
                Discover. Stay. Explore.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
                Your gateway to coastal accommodation, property opportunities and travel experiences across Malindi,
                Watamu, Kilifi and Vipingo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/stays"
                  className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
                >
                  Browse stays
                </Link>
                <a
                  href={generalEnquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <section className="relative z-10 mx-auto -mt-14 max-w-6xl px-4 sm:px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({
              to: "/stays",
              search: { destination: destination || undefined, guests: Number(guests) || undefined },
            });
          }}
          className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-xl sm:grid-cols-2 lg:grid-cols-5"
        >
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Destination</span>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
            >
              <option value="">Anywhere on the coast</option>
              {DESTINATIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Check-in</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Check-out</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Guests</span>
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
            />
          </label>
          <button
            type="submit"
            className="mt-auto rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Search stays
          </button>
        </form>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured stays */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold">Featured stays</h2>
            <p className="mt-2 text-muted-foreground">Hand-picked places from our coastal portfolio.</p>
          </div>
          <Link to="/stays" className="shrink-0 text-sm font-semibold text-primary hover:underline">
            View all stays →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAYS.slice(0, 3).map((s) => (
            <StayCard key={s.slug} stay={s} />
          ))}
        </div>
      </section>

      {/* How booking works */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">How booking works</h2>
          <p className="mt-2 max-w-2xl opacity-85">
            We keep it simple and personal. Send your request on WhatsApp and a real person handles it.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["1", "Choose your stay", "Browse our stays and pick your dates and guests."],
              ["2", "Tap Book on WhatsApp", "We open a chat with your stay details already written for you."],
              ["3", "We check availability", "Our team confirms the dates and sends you a price and terms."],
              ["4", "Confirm and travel", "Pay as agreed, receive your confirmation and enjoy the coast."],
            ].map(([n, title, body]) => (
              <div key={n} className="rounded-2xl bg-white/10 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-display font-bold text-gold-foreground">
                  {n}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm opacity-85">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm opacity-70">
            A WhatsApp message is an inquiry, not a confirmed booking. Your stay is confirmed once our team confirms it.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold">Things to do</h2>
            <p className="mt-2 text-muted-foreground">Coast and safari experiences with trusted partners.</p>
          </div>
          <Link to="/experiences" className="shrink-0 text-sm font-semibold text-primary hover:underline">
            All experiences →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e) => (
            <ExperienceCard key={e.slug} experience={e} />
          ))}
        </div>
      </section>

      {/* Real estate */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold">Property for sale</h2>
              <p className="mt-2 text-muted-foreground">Authorized coastal listings, viewings arranged on request.</p>
            </div>
            <Link to="/real-estate" className="shrink-0 text-sm font-semibold text-primary hover:underline">
              All property →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LISTINGS.map((l) => (
              <ListingCard key={l.slug} listing={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Owner CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          <h2 className="font-display text-3xl font-semibold">Own a property on the coast?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Join the MASHA ELITE portfolio. We handle listing, guest communication, bookings and reporting so your
            property works harder for you.
          </p>
          <Link
            to="/list-your-property"
            className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            List your property
          </Link>
        </div>
      </section>
    </div>
  );
}
