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
    <div className="flex flex-wrap gap-1.5">
      {plants.map((plant) => (
        <span
          key={plant.slug}
          className="inline-flex items-center gap-1 rounded-sm bg-sage-light px-2 py-0.5 font-serif text-[13px] italic text-clay"
        >
          {plant.name}
          <button
            type="button"
            onClick={() => onRemove(plant.slug)}
            className="ml-0.5 text-clay/40 hover:text-clay"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
    </div>
  );
}
