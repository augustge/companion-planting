import { Sun, CloudSun, Cloud, Droplets, Snowflake } from "lucide-react";
import type { SunRequirement, WaterNeed, FrostTolerance } from "@/lib/types";

const sunConfig: Record<SunRequirement, { icon: typeof Sun; label: string }> = {
  "full-sun": { icon: Sun, label: "Full sun" },
  "partial-shade": { icon: CloudSun, label: "Partial shade" },
  shade: { icon: Cloud, label: "Shade" },
};

const waterConfig: Record<WaterNeed, string> = {
  low: "Low water",
  moderate: "Moderate water",
  high: "High water",
};

const frostConfig: Record<FrostTolerance, string> = {
  tender: "Frost tender",
  "semi-hardy": "Semi-hardy",
  hardy: "Frost hardy",
};

export function SunBadge({ value }: { value: SunRequirement }) {
  const { icon: Icon, label } = sunConfig[value];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

export function WaterBadge({ value }: { value: WaterNeed }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
      <Droplets className="h-3.5 w-3.5" />
      {waterConfig[value]}
    </span>
  );
}

export function FrostBadge({ value }: { value: FrostTolerance }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700">
      <Snowflake className="h-3.5 w-3.5" />
      {frostConfig[value]}
    </span>
  );
}
