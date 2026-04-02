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
    <div className="flex items-start gap-3 py-2">
      <Link
        href={`/plant/${plant.slug}`}
        className="flex shrink-0 items-center gap-2 font-medium hover:underline"
      >
        <PlantIcon
          name={plant.icon}
          className="h-4 w-4 text-muted-foreground"
        />
        <span>{plant.name}</span>
      </Link>
      <div className="text-sm text-muted-foreground">
        <span>{reason}</span>
        {citations && citations.length > 0 && (
          <span className="ml-1 text-xs text-muted-foreground/60">
            [
            {citations.map((c, i) => (
              <span key={i}>
                {i > 0 && "; "}
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
            ]
          </span>
        )}
      </div>
    </div>
  );
}
