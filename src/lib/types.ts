export type PlantCategory = "vegetable" | "herb" | "flower";

export type SunRequirement = "full-sun" | "partial-shade" | "shade";
export type WaterNeed = "low" | "moderate" | "high";
export type FrostTolerance = "tender" | "semi-hardy" | "hardy";

/** Month range as 1-12 integers. [3, 4] = March through April. */
export type MonthRange = [start: number, end: number];

export type PlantingCalendar = {
  sowIndoors: MonthRange | null;
  transplant: MonthRange | null;
  sowOutdoors: MonthRange | null;
  harvest: MonthRange | null;
};

export type Plant = {
  name: string;
  species: string;
  slug: string;
  category: PlantCategory;
  icon: string;
  description: string;
  sun: SunRequirement;
  water: WaterNeed;
  frost: FrostTolerance;
  calendar: PlantingCalendar;
  spacing: string;
  harvestDays: string | null;
  tips: string;
};

export type Compatibility = "companion" | "helpful" | "antagonist";

export type Citation = {
  label: string;
  url: string | null;
};

export type CompanionEdge = {
  plants: [string, string];
  compatibility: Compatibility;
  reason: string;
  citations: Citation[];
};
