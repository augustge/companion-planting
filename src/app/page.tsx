import { Suspense } from "react";
import { plants, companions, getCompanions } from "@/lib/plants";
import { GardenPlanner } from "@/components/garden-planner";

export default function Home() {
  const companionCounts: Record<string, number> = {};
  for (const plant of plants) {
    companionCounts[plant.slug] = getCompanions(plant.slug).length;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Suspense>
        <GardenPlanner
          plants={plants}
          companions={companions}
          companionCounts={companionCounts}
        />
      </Suspense>
    </div>
  );
}
