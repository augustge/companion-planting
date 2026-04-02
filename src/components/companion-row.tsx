import Link from "next/link";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant, Citation } from "@/lib/types";

export function CompanionRow({
  plant,
  reason,
  citations,
}: {
  plant: Plant;
  reason: string;
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
      {citations && citations.length > 0 && (
        <p className="mt-0.5 pl-5 text-[11px] text-muted-foreground/50">
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
        </p>
      )}
    </div>
  );
}
