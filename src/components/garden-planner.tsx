"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SelectionBar } from "@/components/selection-bar";
import { PlantSelector } from "@/components/plant-selector";
import { PlantingCalendar } from "@/components/planting-calendar";
import { CompatibilityMatrix } from "@/components/compatibility-matrix";
import type { Plant, CompanionEdge } from "@/lib/types";

const MAX_SELECTED = 12;

export function GardenPlanner({
  plants,
  companions,
  companionCounts,
}: {
  plants: Plant[];
  companions: CompanionEdge[];
  companionCounts: Record<string, number>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedSlugs = useMemo(() => {
    const param = searchParams.get("plants");
    if (!param) return new Set<string>();
    const validSlugs = new Set(plants.map((p) => p.slug));
    return new Set(
      param
        .split(",")
        .filter((s) => s && validSlugs.has(s))
    );
  }, [searchParams, plants]);

  const updateSelection = useCallback(
    (slugs: Set<string>) => {
      const params = new URLSearchParams(searchParams);
      if (slugs.size === 0) {
        params.delete("plants");
      } else {
        params.set("plants", Array.from(slugs).join(","));
      }
      const qs = params.toString();
      router.replace(qs ? `/?${qs}` : "/", { scroll: false });
    },
    [router, searchParams]
  );

  const toggle = useCallback(
    (slug: string) => {
      const next = new Set(selectedSlugs);
      if (next.has(slug)) {
        next.delete(slug);
      } else if (next.size < MAX_SELECTED) {
        next.add(slug);
      }
      updateSelection(next);
    },
    [selectedSlugs, updateSelection]
  );

  const remove = useCallback(
    (slug: string) => {
      const next = new Set(selectedSlugs);
      next.delete(slug);
      updateSelection(next);
    },
    [selectedSlugs, updateSelection]
  );

  const selectedPlants = useMemo(
    () => plants.filter((p) => selectedSlugs.has(p.slug)),
    [plants, selectedSlugs]
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Hageplanlegger</h1>
        <p className="mt-1 text-muted-foreground">
          Velg planter for å se når du kan så, plante ut og høste — og hvilke
          som trives sammen.
        </p>
      </div>

      {selectedSlugs.size > 0 && (
        <SelectionBar plants={selectedPlants} onRemove={remove} />
      )}

      <PlantSelector
        plants={plants}
        companionCounts={companionCounts}
        selectedSlugs={selectedSlugs}
        onToggle={toggle}
      />

      {selectedPlants.length > 0 && (
        <PlantingCalendar plants={selectedPlants} />
      )}

      {selectedPlants.length >= 2 && (
        <CompatibilityMatrix plants={selectedPlants} companions={companions} />
      )}
    </div>
  );
}
