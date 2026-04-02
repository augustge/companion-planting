import { Suspense } from "react";
import { plants, companions } from "@/lib/plants";
import { GardenPlanner } from "@/components/garden-planner";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Suspense>
        <GardenPlanner plants={plants} companions={companions} />
      </Suspense>
    </div>
  );
}
