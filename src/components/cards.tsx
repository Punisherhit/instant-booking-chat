import { Link } from "@tanstack/react-router";
import type { Experience, Listing, Stay } from "@/data/catalogue";
import { serviceEnquiryLink } from "@/lib/site";
import { WhatsAppIcon } from "./chrome";

export function formatKes(n: number): string {
  return `KES ${n.toLocaleString("en-KE")}`;
}

export function StayCard({ stay }: { stay: Stay }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <Link to="/stays/$slug" params={{ slug: stay.slug }} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={stay.image}
          alt={stay.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {stay.managed && (
          <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
            MASH ELITE managed
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to="/stays/$slug" params={{ slug: stay.slug }} className="font-display text-lg font-semibold hover:underline">
              {stay.name}
            </Link>
            <p className="text-sm text-muted-foreground">
              {stay.location} · {stay.type} · {stay.bedrooms} bed · sleeps {stay.sleeps}
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-primary">{formatKes(stay.pricePerNight)}</p>
            <p className="text-xs text-muted-foreground">per night</p>
          </div>
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{stay.summary}</p>
        <Link
          to="/stays/$slug"
          params={{ slug: stay.slug }}
          className="mt-4 inline-flex w-fit items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          View &amp; book
        </Link>
      </div>
    </div>
  );
}

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
          For sale
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-lg font-semibold">{listing.title}</p>
        <p className="text-sm text-muted-foreground">
          {listing.location} · {listing.bedrooms} bed · {listing.bathrooms} bath · {listing.plotSize}
        </p>
        <p className="mt-1 font-semibold text-primary">{formatKes(listing.price)}</p>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{listing.summary}</p>
        <a
          href={serviceEnquiryLink(
            "Property Viewing",
            `Property: ${listing.title} (${listing.location}), listed at ${formatKes(listing.price)}. I'd like to arrange a viewing.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Request viewing
        </a>
      </div>
    </div>
  );
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-lg font-semibold">{experience.name}</p>
        <p className="text-sm text-muted-foreground">
          {experience.location} · {experience.duration}
        </p>
        <p className="mt-1 font-semibold text-primary">{formatKes(experience.price)} per person</p>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{experience.summary}</p>
        <a
          href={serviceEnquiryLink(
            "Experience",
            `Experience: ${experience.name} in ${experience.location} (${experience.duration}).`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
}
