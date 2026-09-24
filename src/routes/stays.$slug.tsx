import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { STAYS } from "@/data/catalogue";
import { formatKes } from "@/components/cards";
import { WhatsAppIcon } from "@/components/chrome";
import { bookingEnquiryLink, makeReference } from "@/lib/site";

export const Route = createFileRoute("/stays/$slug")({
  loader: ({ params }) => {
    const stay = STAYS.find((s) => s.slug === params.slug);
    if (!stay) throw notFound();
    return { stay };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Stay not found — MASHA ELITE" }, { name: "robots", content: "noindex" }] };
    }
    const { stay } = loaderData;
    const title = `${stay.name}, ${stay.location} — MASHA ELITE`;
    return {
      meta: [
        { title },
        { name: "description", content: stay.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: stay.summary },
      ],
    };
  },
  component: StayDetail,
});

function StayDetail() {
  const { stay } = Route.useLoaderData();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState(stay.roomTypes[0]?.name ?? "");
  const [reference] = useState(() => makeReference());

  const link = bookingEnquiryLink({
    property: stay.name,
    location: stay.location,
    checkIn,
    checkOut,
    adults,
    children,
    roomType,
    reference,
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Link to="/stays" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to stays
      </Link>

      <div className="mt-4 overflow-hidden rounded-3xl">
        <img
          src={stay.image}
          alt={stay.name}
          width={1024}
          height={768}
          className="h-[46vh] min-h-[300px] w-full object-cover"
        />
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-4xl font-semibold">{stay.name}</h1>
            {stay.managed && (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                MASHA ELITE managed
              </span>
            )}
          </div>
          <p className="mt-2 text-muted-foreground">
            {stay.location} · {stay.type} · {stay.bedrooms} bedrooms · sleeps {stay.sleeps}
          </p>

          <p className="mt-6 leading-relaxed">{stay.description}</p>

          <h2 className="mt-10 font-display text-2xl font-semibold">Amenities</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {stay.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {a}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-2xl font-semibold">Rooms &amp; rates</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            {stay.roomTypes.map((r, i) => (
              <div
                key={r.name}
                className={`flex items-center justify-between gap-4 p-4 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-sm text-muted-foreground">Sleeps {r.sleeps}</p>
                </div>
                <p className="font-semibold text-primary">
                  {formatKes(r.price)}
                  <span className="text-xs font-normal text-muted-foreground"> / night</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Rates are indicative and confirmed by our team per your dates. Availability is verified before confirmation.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold">Good to know</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border p-4">
              <p className="text-sm font-medium">Check-in</p>
              <p className="text-sm text-muted-foreground">{stay.checkIn}</p>
              <p className="mt-3 text-sm font-medium">Check-out</p>
              <p className="text-sm text-muted-foreground">{stay.checkOut}</p>
            </div>
            <div className="rounded-2xl border border-border p-4">
              <p className="text-sm font-medium">House rules</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                {stay.houseRules.map((r) => (
                  <li key={r}>· {r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking panel */}
        <aside className="h-fit lg:sticky lg:top-24">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-display text-2xl font-semibold text-primary">
              {formatKes(stay.pricePerNight)}
              <span className="text-sm font-normal text-muted-foreground"> / night from</span>
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1.5">
                  <span className="font-medium">Check-in</span>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="rounded-lg border border-input bg-background px-3 py-2"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-medium">Check-out</span>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="rounded-lg border border-input bg-background px-3 py-2"
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1.5">
                  <span className="font-medium">Adults</span>
                  <input
                    type="number"
                    min={1}
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="rounded-lg border border-input bg-background px-3 py-2"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-medium">Children</span>
                  <input
                    type="number"
                    min={0}
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="rounded-lg border border-input bg-background px-3 py-2"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="font-medium">Room</span>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="rounded-lg border border-input bg-background px-3 py-2"
                >
                  {stay.roomTypes.map((r) => (
                    <option key={r.name} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
            </a>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your inquiry reference: <span className="font-semibold text-foreground">{reference}</span>
            </p>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              We'll check availability and reply with your price and payment details. This is an inquiry, not a
              confirmed booking.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
