import Link from "next/link";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant, Citation, EvidenceLevel } from "@/lib/types";

const evidenceLabel: Record<EvidenceLevel, string> = {
  high: "sterk",
  moderate: "middels",
  low: "svak",
};

const evidenceColor: Record<EvidenceLevel, string> = {
  high: "text-sage",
  moderate: "text-muted-foreground/60",
  low: "text-muted-foreground/40",
};

export function CompanionRow({
  plant,
  reason,
  evidence,
  citations,
}: {
  plant: Plant;
  reason: string;
  evidence?: EvidenceLevel;
  citations?: Citation[];
}) {
  return (
    <div className="py-1.5">
      <div className="flex items-baseline gap-2">
        <Link
          href={`/plant/${plant.slug}`}
          className="inline-flex items-center gap-1.5 font-medium hover:underline"
        >
          <PlantIcon
            name={plant.icon}
            className="h-3.5 w-3.5 text-muted-foreground"
          />
          {plant.name}
        </Link>
        <span className="text-sm text-muted-foreground">— {reason}</span>
      </div>
      <div className="mt-0.5 flex items-center gap-3 pl-5 text-[11px]">
        {evidence && (
          <span className={evidenceColor[evidence]}>
            Evidens: {evidenceLabel[evidence]}
          </span>
        )}
        {citations && citations.length > 0 && (
          <span className="text-muted-foreground/50">
            {citations.map((c, i) => (
              <span key={i}>
                {i > 0 && " · "}
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {c.label}
                  </a>
                ) : (
                  c.label
                )}
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
