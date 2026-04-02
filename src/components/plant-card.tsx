import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant } from "@/lib/types";

const categoryLabel: Record<Plant["category"], string> = {
  vegetable: "Grønnsak",
  herb: "Urt",
  flower: "Blomst",
};

type PlantCardProps = {
  plant: Plant;
  companionCount: number;
} & (
  | { selectable?: false; selected?: never; onToggle?: never }
  | { selectable: true; selected: boolean; onToggle: () => void }
);

export function PlantCard({
  plant,
  companionCount,
  selectable,
  selected,
  onToggle,
}: PlantCardProps) {
  const inner = (
    <Card
      className={`h-full transition-colors hover:bg-muted/50 ${
        selected ? "ring-2 ring-primary bg-muted/50" : ""
      }`}
    >
      <CardContent className="flex flex-col items-center text-center">
        <PlantIcon
          name={plant.icon}
          className="mb-2 h-8 w-8 text-muted-foreground"
        />
        <span className="font-medium">{plant.name}</span>
        <Badge variant="secondary" className="mt-1.5">
          {categoryLabel[plant.category]}
        </Badge>
        {companionCount > 0 && (
          <span className="mt-2 text-xs text-muted-foreground">
            {companionCount} kombinasjon{companionCount !== 1 ? "er" : ""}
          </span>
        )}
      </CardContent>
    </Card>
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
