import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import transferImage from "@/assets/transfer.jpg";
import { WhatsAppIcon } from "@/components/chrome";
import { serviceEnquiryLink } from "@/lib/site";

export const Route = createFileRoute("/transfers")({
  head: () => ({
    meta: [
      { title: "Airport Transfers & Travel — MASH ELITE" },
      {
        name: "description",
        content:
          "Airport pickups, inter-town transfers and safari connections across the Kenyan coast. Request a quote on WhatsApp.",
      },
      { property: "og:title", content: "Airport Transfers & Travel — MASH ELITE" },
      {
        property: "og:description",
        content: "Reliable coastal transfers and travel coordination. Request a quote on WhatsApp.",
      },
    ],
  }),
  component: TransfersPage,
});

const ROUTES = [
  { from: "Mombasa Airport (MBA)", to: "Malindi", note: "Approx. 2.5 hours" },
  { from: "Mombasa Airport (MBA)", to: "Watamu", note: "Approx. 2 hours" },
  { from: "Malindi Airport (MYD)", to: "Watamu", note: "Approx. 30 minutes" },
  { from: "Malindi", to: "Kilifi", note: "Approx. 1 hour" },
  { from: "Coast hotels", to: "Tsavo East gate", note: "Safari connection" },
];

function TransfersPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(2);

  const link = serviceEnquiryLink(
    "Transfer",
    `Route: ${from || "—"} to ${to || "—"}. Date: ${date || "flexible"}. Passengers: ${passengers}.`,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold">Transfers &amp; Travel</h1>
          <p className="mt-3 text-muted-foreground">
            Airport pickups, inter-town transfers and safari connections through approved, insured drivers. Share your
            route and we quote before you commit.
          </p>
          <img
            src={transferImage}
            alt="Transfer van on a palm-lined coastal road"
            loading="lazy"
            width={1024}
            height={768}
            className="mt-6 rounded-2xl object-cover"
          />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-display text-2xl font-semibold">Request a transfer</h2>
          <div className="mt-5 space-y-4 text-sm">
            <label className="flex flex-col gap-1.5">
              <span className="font-medium">Pickup</span>
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="e.g. Mombasa Airport"
                className="rounded-lg border border-input bg-background px-3 py-2"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-medium">Drop-off</span>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. Watamu"
                className="rounded-lg border border-input bg-background px-3 py-2"
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className="font-medium">Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="rounded-lg border border-input bg-background px-3 py-2"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-medium">Passengers</span>
                <input
                  type="number"
                  min={1}
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="rounded-lg border border-input bg-background px-3 py-2"
                />
              </label>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Get a quote on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold">Popular routes</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ROUTES.map((r) => (
          <div key={`${r.from}-${r.to}`} className="rounded-2xl border border-border bg-card p-5">
            <p className="font-medium">
              {r.from} → {r.to}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
