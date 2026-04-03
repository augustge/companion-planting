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
      className={`flex flex-col items-center gap-0.5 rounded-sm px-1.5 py-2.5 text-center transition-colors ${
        selected ? "bg-sage-light" : "hover:bg-linen"
      }`}
    >
      <PlantIcon
        name={plant.icon}
        className={`h-5 w-5 ${selected ? "text-sage" : "text-clay/40"}`}
      />
      <span className="font-serif text-[13px] leading-tight text-clay">
        {plant.name}
      </span>
      <span className="font-serif text-[10px] italic text-clay/40">
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
