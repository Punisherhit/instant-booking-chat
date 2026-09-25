import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { generalEnquiryLink, SITE_EMAIL, SITE_NAME, SITE_PHONE } from "@/lib/site";

const NAV = [
  { to: "/stays", label: "Stays" },
  { to: "/real-estate", label: "Real Estate" },
  { to: "/experiences", label: "Experiences" },
  { to: "/transfers", label: "Transfers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
            ME
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">{SITE_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary font-semibold" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={generalEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book on WhatsApp
          </a>
        </nav>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-sm font-medium">
                {item.label}
              </Link>
            ))}
            <a
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">{SITE_NAME}</p>
          <p className="mt-2 text-sm opacity-80">Discover. Stay. Explore.</p>
          <p className="mt-4 text-sm opacity-80">
            Coastal accommodation, real estate and travel across Malindi, Watamu, Kilifi and Vipingo.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-70">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="opacity-85 transition-opacity hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-70">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/list-your-property" className="opacity-85 hover:opacity-100">
                List your property
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="opacity-85 hover:opacity-100">
                Privacy notice
              </Link>
            </li>
            <li>
              <Link to="/terms" className="opacity-85 hover:opacity-100">
                Terms &amp; conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-70">Talk to us</p>
          <a
            href={generalEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp us
          </a>
          <p className="mt-3 text-sm opacity-80">
            <a href="tel:+254745592258" className="hover:opacity-100">
              +254 745 592258
            </a>
            {" · "}
            {SITE_PHONE}
          </p>
          <p className="mt-1 text-sm opacity-80">
            <a href={`mailto:${SITE_EMAIL}`} className="hover:opacity-100">
              {SITE_EMAIL}
            </a>
          </p>
          <p className="mt-2 text-sm opacity-80">We reply during business hours, EAT.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        <p className="opacity-80">Designed &amp; Developed by{" "}
          <a
            href={developerWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold transition-opacity hover:opacity-80"
          >
            ANTHONY DERIC
          </a>
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <a
            href={developerWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            +254 103 120 054
          </a>
          <a
            href="mailto:antondewin457@gmail.com"
            className="inline-flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100"
          >
            <MailIcon className="h-3.5 w-3.5" />
            antondewin457@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={generalEnquiryLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MASHA ELITE on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
