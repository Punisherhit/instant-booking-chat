import { createFileRoute } from "@tanstack/react-router";
import { EXPERIENCES } from "@/data/catalogue";
import { ExperienceCard } from "@/components/cards";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Tours & Experiences — MASHA ELITE" },
      {
        name: "description",
        content:
          "Dhow cruises in Watamu, Tsavo East safaris, marine park snorkelling and more. Book coastal experiences on WhatsApp.",
      },
      { property: "og:title", content: "Tours & Experiences — MASHA ELITE" },
      {
        property: "og:description",
        content: "Coast and safari experiences with qualified local partners. Book on WhatsApp.",
      },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Tours &amp; Experiences</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        From Mida Creek sunsets to Tsavo's red elephants — experiences run by qualified, vetted partners and
        coordinated by our team.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((e) => (
          <ExperienceCard key={e.slug} experience={e} />
        ))}
      </div>
    </div>
  );
}
