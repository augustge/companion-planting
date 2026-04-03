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
        <h1 className="font-serif text-3xl font-semibold italic tracking-tight text-clay">
          Utforsk planter
        </h1>
        <p className="mt-1.5 font-serif text-sm text-clay/60">
          Hele katalogen — grønnsaker, urter, blomster, bær og inneplanter.
        </p>
      </div>
      <PlantSearch plants={plants} />
    </div>
  );
}
