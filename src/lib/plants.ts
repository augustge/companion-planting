import { plants } from "@/data/plants";
import { companions } from "@/data/companions";
import type { Plant, PlantCategory, Compatibility, CompanionEdge } from "@/lib/types";

export { plants, companions };

export function getPlant(slug: string): Plant | undefined {
  return plants.find((p) => p.slug === slug);
}

export function allSlugs(): string[] {
  return plants.map((p) => p.slug);
}

export function plantsByCategory(category: PlantCategory): Plant[] {
  return plants.filter((p) => p.category === category);
}

export function getCompanions(
  slug: string
): { plant: Plant; compatibility: Compatibility; reason: string }[] {
  return companions
    .filter((edge) => edge.plants.includes(slug))
    .map((edge) => {
      const otherSlug = edge.plants[0] === slug ? edge.plants[1] : edge.plants[0];
      const plant = getPlant(otherSlug);
      if (!plant) return null;
      return { plant, compatibility: edge.compatibility, reason: edge.reason };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

export function getRelationship(
  slugA: string,
  slugB: string
): CompanionEdge | null {
  const sorted: [string, string] =
    slugA < slugB ? [slugA, slugB] : [slugB, slugA];
  return (
    companions.find(
      (edge) => edge.plants[0] === sorted[0] && edge.plants[1] === sorted[1]
    ) ?? null
  );
}
