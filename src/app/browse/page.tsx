import type { Metadata } from "next";
import { plants, getCompanions } from "@/lib/plants";
import { PlantSearch } from "@/components/plant-search";

export const metadata: Metadata = {
  title: "Utforsk planter",
};

export default function BrowsePage() {
  const companionCounts: Record<string, number> = {};
  for (const plant of plants) {
    companionCounts[plant.slug] = getCompanions(plant.slug).length;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Utforsk planter</h1>
        <p className="mt-1 text-muted-foreground">
          Utforsk hele katalogen vår med grønnsaker, urter og blomster.
        </p>
      </div>
      <PlantSearch plants={plants} companionCounts={companionCounts} />
    </div>
  );
}
