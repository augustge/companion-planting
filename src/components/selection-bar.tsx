"use client";

import { X } from "lucide-react";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant } from "@/lib/types";

export function SelectionBar({
  plants,
  onRemove,
}: {
  plants: Plant[];
  onRemove: (slug: string) => void;
}) {
  if (plants.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {plants.map((plant) => (
        <span
          key={plant.slug}
          className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium"
        >
          <PlantIcon name={plant.icon} className="h-3.5 w-3.5 text-muted-foreground" />
          {plant.name}
          <button
            type="button"
            onClick={() => onRemove(plant.slug)}
            className="ml-0.5 rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
    </div>
  );
}
