import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { DESTINATIONS, STAYS } from "@/data/catalogue";
import { StayCard } from "@/components/cards";

type StaysSearch = {
  destination?: string;
  type?: string;
  guests?: number;
  maxPrice?: number;
  sort?: string;
};

export const Route = createFileRoute("/stays/")({
  validateSearch: (search: Record<string, unknown>): StaysSearch => ({
    destination: typeof search.destination === "string" ? search.destination : undefined,
    type: typeof search.type === "string" ? search.type : undefined,
    guests: search.guests ? Number(search.guests) : undefined,
    maxPrice: search.maxPrice ? Number(search.maxPrice) : undefined,
    sort: typeof search.sort === "string" ? search.sort : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Stays on the Kenyan Coast — MASH ELITE" },
      {
        name: "description",
        content:
          "Search villas, apartments, B&Bs and hotels in Malindi, Watamu, Kilifi, Vipingo and Diani. Filter by dates, guests and price, then book on WhatsApp.",
      },
      { property: "og:title", content: "Stays on the Kenyan Coast — MASH ELITE" },
      {
        property: "og:description",
        content: "Villas, apartments, B&Bs and hotels across Kenya's north coast. Book on WhatsApp.",
      },
    ],
  }),
  component: StaysPage,
});

const TYPES = ["Villa", "Apartment", "B&B", "Hotel"];

function StaysPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/stays" });

  const update = (patch: Partial<StaysSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }) });

  let results = STAYS.filter((s) => {
    if (search.destination && s.location !== search.destination) return false;
    if (search.type && s.type !== search.type) return false;
    if (search.guests && s.sleeps < search.guests) return false;
    if (search.maxPrice && s.pricePerNight > search.maxPrice) return false;
    return true;
  });

  if (search.sort === "price-asc") results = [...results].sort((a, b) => a.pricePerNight - b.pricePerNight);
  if (search.sort === "price-desc") results = [...results].sort((a, b) => b.pricePerNight - a.pricePerNight);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Stays</h1>
      <p className="mt-2 text-muted-foreground">
        {results.length} {results.length === 1 ? "property" : "properties"} across Kenya's coast.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-2xl border border-border bg-card p-5">
          <p className="font-display text-lg font-semibold">Filters</p>
          <div className="mt-4 space-y-4 text-sm">
            <label className="flex flex-col gap-1.5">
              <span className="font-medium">Destination</span>
              <select
                value={search.destination ?? ""}
                onChange={(e) => update({ destination: e.target.value || undefined })}
                className="rounded-lg border border-input bg-background px-3 py-2"
              >
                <option value="">All destinations</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-medium">Property type</span>
              <select
                value={search.type ?? ""}
                onChange={(e) => update({ type: e.target.value || undefined })}
                className="rounded-lg border border-input bg-background px-3 py-2"
              >
                <option value="">Any type</option>
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-medium">Guests</span>
              <input
                type="number"
                min={1}
                value={search.guests ?? ""}
                onChange={(e) => update({ guests: e.target.value ? Number(e.target.value) : undefined })}
                className="rounded-lg border border-input bg-background px-3 py-2"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-medium">Max price per night (KES)</span>
              <input
                type="number"
                min={0}
                step={1000}
                value={search.maxPrice ?? ""}
                onChange={(e) => update({ maxPrice: e.target.value ? Number(e.target.value) : undefined })}
                className="rounded-lg border border-input bg-background px-3 py-2"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-medium">Sort by</span>
              <select
                value={search.sort ?? ""}
                onChange={(e) => update({ sort: e.target.value || undefined })}
                className="rounded-lg border border-input bg-background px-3 py-2"
              >
                <option value="">Relevance</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </label>
            <button
              onClick={() => navigate({ search: {} })}
              className="w-full rounded-lg border border-input px-3 py-2 font-medium transition-colors hover:bg-accent"
            >
              Clear filters
            </button>
          </div>
        </aside>

        <div>
          {results.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <p className="font-display text-lg font-semibold">No stays match those filters</p>
              <p className="mt-2 text-sm text-muted-foreground">Try widening your dates, guests or price range.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((s) => (
                <StayCard key={s.slug} stay={s} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
