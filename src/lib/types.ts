export type PlantCategory =
  | "vegetable"
  | "herb"
  | "flower"
  | "berry"
  | "houseplant";

export type SunRequirement = "full-sun" | "partial-shade" | "shade";
export type WaterNeed = "low" | "moderate" | "high";
export type FrostTolerance = "tender" | "semi-hardy" | "hardy";
export type NutrientNeed = "low" | "moderate" | "high";
export type Lifecycle = "annual" | "biennial" | "perennial";
export type EvidenceLevel = "low" | "moderate" | "high";

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
  family: string;
  icon: string;
  description: string;
  sun: SunRequirement;
  water: WaterNeed;
  frost: FrostTolerance;
  nutrientNeed: NutrientNeed;
  soilPh: string;
  rootDepth: string;
  lifecycle: Lifecycle;
  supportNeed: boolean;
  containerSuitability: "low" | "moderate" | "high";
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
  evidence: EvidenceLevel;
  citations: Citation[];
};
