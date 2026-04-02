import { PlantCard } from "@/components/plant-card";
import { getCompanions } from "@/lib/plants";
import type { Plant } from "@/lib/types";

export function PlantGrid({ plants }: { plants: Plant[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {plants.map((plant) => (
        <PlantCard
          key={plant.slug}
          plant={plant}
          companionCount={getCompanions(plant.slug).length}
        />
      ))}
    </div>
  );
}
