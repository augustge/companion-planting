import type { Metadata } from "next";
import { plants, getCompanions } from "@/lib/plants";
import { PlantSearch } from "@/components/plant-search";

export const metadata: Metadata = {
  title: "Browse Plants",
};

export default function BrowsePage() {
  const companionCounts: Record<string, number> = {};
  for (const plant of plants) {
    companionCounts[plant.slug] = getCompanions(plant.slug).length;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Browse Plants</h1>
        <p className="mt-1 text-muted-foreground">
          Explore our full catalog of vegetables, herbs, and flowers.
        </p>
      </div>
      <PlantSearch plants={plants} companionCounts={companionCounts} />
    </div>
  );
}
