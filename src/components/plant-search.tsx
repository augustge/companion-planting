"use client";

import { useState, useMemo } from "react";
import { PlantCard } from "@/components/plant-card";
import type { Plant, PlantCategory } from "@/lib/types";

const categories: { value: PlantCategory | "all"; label: string }[] = [
  { value: "all", label: "Alle" },
  { value: "vegetable", label: "Grønnsaker" },
  { value: "herb", label: "Urter" },
  { value: "flower", label: "Blomster" },
  { value: "berry", label: "Bær" },
  { value: "houseplant", label: "Inneplanter" },
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
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          placeholder="Søk etter planter..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-0 border-b border-clay/10 bg-transparent px-0 py-1.5 font-serif text-sm text-clay placeholder:text-clay/30 focus:border-clay/30 focus:outline-none sm:w-56"
        />
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-serif text-[13px]">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={`transition-colors ${
                category === cat.value
                  ? "text-clay"
                  : "text-clay/30 hover:text-clay/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center font-serif text-sm text-clay/40">
          Ingen planter funnet.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-px sm:grid-cols-4 md:grid-cols-5">
          {filtered.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}
