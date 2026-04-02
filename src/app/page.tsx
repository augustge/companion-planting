import { plants, getCompanions } from "@/lib/plants";
import { PlantSearch } from "@/components/plant-search";

export default function Home() {
  const companionCounts: Record<string, number> = {};
  for (const plant of plants) {
    companionCounts[plant.slug] = getCompanions(plant.slug).length;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Explore Plants</h1>
        <p className="mt-1 text-muted-foreground">
          Discover which plants grow well together and which to keep apart.
        </p>
      </div>
      <PlantSearch plants={plants} companionCounts={companionCounts} />
    </div>
  );
}
