import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Plant } from "@/lib/types";

const categoryLabel: Record<Plant["category"], string> = {
  vegetable: "Vegetable",
  herb: "Herb",
  flower: "Flower",
};

export function PlantCard({
  plant,
  companionCount,
}: {
  plant: Plant;
  companionCount: number;
}) {
  return (
    <Link href={`/plant/${plant.slug}`}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardContent className="flex flex-col items-center text-center">
          <span className="mb-2 text-4xl">{plant.emoji}</span>
          <span className="font-medium">{plant.name}</span>
          <Badge variant="secondary" className="mt-1.5">
            {categoryLabel[plant.category]}
          </Badge>
          {companionCount > 0 && (
            <span className="mt-2 text-xs text-muted-foreground">
              {companionCount} companion{companionCount !== 1 ? "s" : ""}
            </span>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
