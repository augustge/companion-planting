"use client";

import { X } from "lucide-react";
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
          className="inline-flex items-center gap-1 rounded-sm bg-sage-light px-2 py-0.5 text-sm"
        >
          {plant.name}
          <button
            type="button"
            onClick={() => onRemove(plant.slug)}
            className="ml-0.5 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
    </div>
  );
}
