import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/chrome";
import { serviceEnquiryLink } from "@/lib/site";

export const Route = createFileRoute("/list-your-property")({
  head: () => ({
    meta: [
      { title: "List Your Property — MASH ELITE" },
      {
        name: "description",
        content:
          "Apply to list your villa, apartment, B&B or hotel with MASH ELITE. We handle listings, bookings and guest communication.",
      },
      { property: "og:title", content: "List Your Property — MASH ELITE" },
      {
        property: "og:description",
        content: "Join the MASH ELITE portfolio — we manage listings, bookings and guests.",
      },
    ],
  }),
  component: ListYourPropertyPage,
});

function ListYourPropertyPage() {
  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState("Villa");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState(2);

  const link = serviceEnquiryLink(
    "Owner Application",
    `Owner name: ${name || "—"}. Property type: ${propertyType}. Location: ${location || "—"}. Bedrooms: ${bedrooms}. I'd like to apply to list my property.`,
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">List your property</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Join a portfolio of 50+ coastal properties. We handle your listing, guest communication, booking inquiries
        and reporting — you stay in control through approvals.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          ["Apply", "Tell us about your property in a quick WhatsApp message."],
          ["Review", "We verify details, rates and photos before anything goes live."],
          ["Earn", "Your listing is published and we manage the inquiries."],
        ].map(([title, body], i) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-gold-foreground">
              {i + 1}
            </span>
            <h2 className="mt-3 font-display text-lg font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="font-display text-2xl font-semibold">Start your application</h2>
        <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="font-medium">Your name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-medium">Property type</span>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="rounded-lg border border-input bg-background px-3 py-2"
            >
              {["Villa", "Apartment", "B&B", "Hotel", "Land", "Other"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-medium">Location / town</span>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Watamu"
              className="rounded-lg border border-input bg-background px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-medium">Bedrooms</span>
            <input
              type="number"
              min={0}
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              className="rounded-lg border border-input bg-background px-3 py-2"
            />
          </label>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Send application on WhatsApp
        </a>
      </div>
    </div>
  );
}
