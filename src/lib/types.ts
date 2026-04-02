export type PlantCategory = "vegetable" | "herb" | "flower";

export type SunRequirement = "full-sun" | "partial-shade" | "shade";
export type WaterNeed = "low" | "moderate" | "high";
export type FrostTolerance = "tender" | "semi-hardy" | "hardy";

export type Plant = {
  name: string;
  slug: string;
  category: PlantCategory;
  emoji: string;
  description: string;
  sun: SunRequirement;
  water: WaterNeed;
  frost: FrostTolerance;
  sowIndoors: string | null;
  sowOutdoors: string | null;
  spacing: string;
  harvestDays: string | null;
  tips: string;
};

export type Compatibility = "companion" | "helpful" | "antagonist";

export type CompanionEdge = {
  plants: [string, string];
  compatibility: Compatibility;
  reason: string;
};
