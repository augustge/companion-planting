import type { Metadata } from "next";
import { plants } from "@/lib/plants";
import { PlantSearch } from "@/components/plant-search";

export const metadata: Metadata = {
  title: "Utforsk planter",
};

export default function BrowsePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold italic">Utforsk planter</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Hele katalogen — grønnsaker, urter og blomster.
        </p>
      </div>
      <PlantSearch plants={plants} />
    </div>
  );
}
