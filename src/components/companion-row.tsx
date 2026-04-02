import Link from "next/link";
import type { Plant } from "@/lib/types";

export function CompanionRow({
  plant,
  reason,
}: {
  plant: Plant;
  reason: string;
}) {
  return (
    <div className="flex items-start gap-3 py-2">
      <Link
        href={`/plant/${plant.slug}`}
        className="flex shrink-0 items-center gap-2 font-medium hover:underline"
      >
        <span className="text-lg">{plant.emoji}</span>
        <span>{plant.name}</span>
      </Link>
      <span className="text-sm text-muted-foreground">{reason}</span>
    </div>
  );
}
