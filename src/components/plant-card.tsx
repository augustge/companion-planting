import Link from "next/link";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant } from "@/lib/types";

type PlantCardProps = {
  plant: Plant;
} & (
  | { selectable?: false; selected?: never; onToggle?: never }
  | { selectable: true; selected: boolean; onToggle: () => void }
);

export function PlantCard({
  plant,
  selectable,
  selected,
  onToggle,
}: PlantCardProps) {
  const inner = (
    <div
      className={`flex flex-col items-center gap-1 rounded px-2 py-3 text-center transition-colors ${
        selected
          ? "bg-sage-light"
          : "hover:bg-secondary"
      }`}
    >
      <PlantIcon
        name={plant.icon}
        className={`mb-0.5 h-6 w-6 ${
          selected ? "text-sage" : "text-muted-foreground"
        }`}
      />
      <span className="text-sm font-medium leading-tight">{plant.name}</span>
      <span className="text-[11px] italic text-muted-foreground">
        {plant.species.split(" ").slice(0, 2).join(" ")}
      </span>
    </div>
  );

  if (selectable) {
    return (
      <button type="button" onClick={onToggle} className="text-left">
        {inner}
      </button>
    );
  }

  return <Link href={`/plant/${plant.slug}`}>{inner}</Link>;
}
