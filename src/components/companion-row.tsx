import Link from "next/link";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant, Citation, EvidenceLevel } from "@/lib/types";

const evidenceLabel: Record<EvidenceLevel, string> = {
  high: "sterk",
  moderate: "middels",
  low: "svak",
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
          className="inline-flex items-center gap-1.5 font-serif text-[13px] font-medium text-clay hover:underline"
        >
          <PlantIcon
            name={plant.icon}
            className="h-3.5 w-3.5 text-clay/40"
          />
          {plant.name}
        </Link>
        <span className="font-serif text-[13px] text-clay/60">— {reason}</span>
      </div>
      <div className="mt-0.5 flex items-center gap-3 pl-5 font-serif text-[10px]">
        {evidence && (
          <span className="text-clay/35">
            evidens: {evidenceLabel[evidence]}
          </span>
        )}
        {citations && citations.length > 0 && (
          <span className="text-clay/25">
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
