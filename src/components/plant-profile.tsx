import { PlantIcon } from "@/components/plant-icon";
import type { Plant, MonthRange } from "@/lib/types";

const monthNames = [
  "jan", "feb", "mar", "apr", "mai", "jun",
  "jul", "aug", "sep", "okt", "nov", "des",
];

function formatRange(range: MonthRange): string {
  return `${monthNames[range[0] - 1]} – ${monthNames[range[1] - 1]}`;
}

const sunLabel = { "full-sun": "Full sol", "partial-shade": "Halvskygge", shade: "Skygge" } as const;
const waterLabel = { low: "Lite vann", moderate: "Middels vann", high: "Mye vann" } as const;
const frostLabel = { tender: "Frostøm", "semi-hardy": "Halvherdig", hardy: "Herdig" } as const;
const nutrientLabel = { low: "Lavt", moderate: "Middels", high: "Høyt" } as const;
const lifecycleLabel = { annual: "Ettårig", biennial: "Toårig", perennial: "Flerårig" } as const;

export function PlantProfile({ plant }: { plant: Plant }) {
  const { calendar } = plant;
  const hasCalendar = calendar.sowIndoors || calendar.transplant || calendar.sowOutdoors || calendar.harvest;

  return (
    <section className="font-serif">
      <PlantIcon name={plant.icon} className="mb-4 h-10 w-10 text-clay/60" />
      <h1 className="text-3xl font-semibold italic tracking-tight text-clay">
        {plant.name}
      </h1>
      <p className="mt-0.5 text-sm italic text-clay/40">
        {plant.species} · {plant.family}
      </p>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-clay/50">
        <span>{sunLabel[plant.sun]}</span>
        <span>{waterLabel[plant.water]}</span>
        <span>{frostLabel[plant.frost]}</span>
        <span>{lifecycleLabel[plant.lifecycle]}</span>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-clay/80">
        {plant.description}
      </p>

      <div className="mt-8">
        <h2 className="mb-3 text-lg tracking-tight text-clay">
          Dyrkingsguide
        </h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[13px]">
          {hasCalendar && calendar.sowIndoors && (
            <>
              <dt className="text-clay/40">Så inne</dt>
              <dd className="text-clay/70">{formatRange(calendar.sowIndoors)}</dd>
            </>
          )}
          {hasCalendar && calendar.transplant && (
            <>
              <dt className="text-clay/40">Plante ut</dt>
              <dd className="text-clay/70">{formatRange(calendar.transplant)}</dd>
            </>
          )}
          {hasCalendar && calendar.sowOutdoors && (
            <>
              <dt className="text-clay/40">Så ute</dt>
              <dd className="text-clay/70">{formatRange(calendar.sowOutdoors)}</dd>
            </>
          )}
          {hasCalendar && calendar.harvest && (
            <>
              <dt className="text-clay/40">Høsting</dt>
              <dd className="text-clay/70">{formatRange(calendar.harvest)}</dd>
            </>
          )}
          <dt className="text-clay/40">Avstand</dt>
          <dd className="text-clay/70">{plant.spacing}</dd>
          <dt className="text-clay/40">Jord-pH</dt>
          <dd className="text-clay/70">{plant.soilPh}</dd>
          <dt className="text-clay/40">Rotdybde</dt>
          <dd className="text-clay/70">{plant.rootDepth}</dd>
          <dt className="text-clay/40">Næringsbehov</dt>
          <dd className="text-clay/70">{nutrientLabel[plant.nutrientNeed]}</dd>
          {plant.harvestDays && (
            <>
              <dt className="text-clay/40">Dager til høsting</dt>
              <dd className="text-clay/70">{plant.harvestDays} dager</dd>
            </>
          )}
        </dl>
        <p className="mt-5 text-[13px] leading-relaxed text-clay/50">
          {plant.tips}
        </p>
      </div>
    </section>
  );
}
