import { CompanionRow } from "@/components/companion-row";
import type { Plant, Compatibility, Citation } from "@/lib/types";

type CompanionEntry = {
  plant: Plant;
  compatibility: Compatibility;
  reason: string;
  citations: Citation[];
};

const groups: {
  type: Compatibility;
  label: string;
  color: string;
}[] = [
  { type: "companion", label: "Gode naboer", color: "text-sage" },
  { type: "helpful", label: "Nyttig i nærheten", color: "text-amber-earth" },
  { type: "antagonist", label: "Hold fra hverandre", color: "text-terracotta" },
];

export function CompanionList({
  companions,
}: {
  companions: CompanionEntry[];
}) {
  if (companions.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold">Samplanting &amp; konflikter</h2>
      <div className="space-y-6">
        {groups.map((group) => {
          const entries = companions.filter(
            (c) => c.compatibility === group.type
          );
          if (entries.length === 0) return null;
          return (
            <div key={group.type}>
              <h3 className={`mb-1 text-sm font-medium ${group.color}`}>
                {group.label}
              </h3>
              <div>
                {entries.map((entry) => (
                  <CompanionRow
                    key={entry.plant.slug}
                    plant={entry.plant}
                    reason={entry.reason}
                    citations={entry.citations}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
