"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PlantCard } from "@/components/plant-card";
import type { Plant, PlantCategory } from "@/lib/types";

const categories: { value: PlantCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "vegetable", label: "Vegetables" },
  { value: "herb", label: "Herbs" },
  { value: "flower", label: "Flowers" },
];

export function PlantSearch({
  plants,
  companionCounts,
}: {
  plants: Plant[];
  companionCounts: Record<string, number>;
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
      <div className="mb-6 space-y-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search plants..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                category === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No plants found.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((plant) => (
            <PlantCard
              key={plant.slug}
              plant={plant}
              companionCount={companionCounts[plant.slug] ?? 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
