import { CheckCircle, Info, XCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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
  icon: typeof CheckCircle;
  headerClass: string;
}[] = [
  {
    type: "companion",
    label: "Good companions",
    icon: CheckCircle,
    headerClass: "text-emerald-700",
  },
  {
    type: "helpful",
    label: "Helpful nearby",
    icon: Info,
    headerClass: "text-amber-700",
  },
  {
    type: "antagonist",
    label: "Keep apart",
    icon: XCircle,
    headerClass: "text-red-700",
  },
];

export function CompanionList({
  companions,
}: {
  companions: CompanionEntry[];
}) {
  if (companions.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold">Companions &amp; Conflicts</h2>
      <div className="space-y-6">
        {groups.map((group) => {
          const entries = companions.filter(
            (c) => c.compatibility === group.type
          );
          if (entries.length === 0) return null;
          const Icon = group.icon;
          return (
            <div key={group.type}>
              <div
                className={`mb-2 flex items-center gap-1.5 text-sm font-medium ${group.headerClass}`}
              >
                <Icon className="h-4 w-4" />
                {group.label}
              </div>
              <div className="divide-y">
                {entries.map((entry) => (
                  <CompanionRow
                    key={entry.plant.slug}
                    plant={entry.plant}
                    reason={entry.reason}
                    citations={entry.citations}
                  />
                ))}
              </div>
              <Separator className="mt-2" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
