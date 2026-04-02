"use client";

import { useState, useMemo } from "react";
import { PlantCard } from "@/components/plant-card";
import type { Plant, PlantCategory } from "@/lib/types";

const categories: { value: PlantCategory | "all"; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "vegetable", label: "Grønnsaker" },
  { value: "herb", label: "Urter" },
  { value: "flower", label: "Blomster" },
];

export function PlantSearch({
  plants,
}: {
  plants: Plant[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PlantCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return plants.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (q && !p.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [plants, query, category]);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          placeholder="Søk etter planter..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-sm border-0 border-b border-border bg-transparent px-0 py-1.5 text-sm placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none sm:w-64"
        />
        <div className="flex gap-3 text-sm">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={`transition-colors ${
                category === cat.value
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          Ingen planter funnet.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5">
          {filtered.map((plant) => (
            <PlantCard
              key={plant.slug}
              plant={plant}
            />
          ))}
        </div>
      )}
    </div>
  );
}
