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
    <section>
      <PlantIcon name={plant.icon} className="mb-4 h-10 w-10 text-clay" />
      <h1 className="text-3xl font-semibold italic">{plant.name}</h1>
      <p className="mt-0.5 text-sm italic text-muted-foreground">
        {plant.species} · {plant.family}
      </p>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span>{sunLabel[plant.sun]}</span>
        <span>{waterLabel[plant.water]}</span>
        <span>{frostLabel[plant.frost]}</span>
        <span>{lifecycleLabel[plant.lifecycle]}</span>
      </div>

      <p className="mt-4 leading-relaxed">{plant.description}</p>

      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Dyrkingsguide</h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm">
          {hasCalendar && calendar.sowIndoors && (
            <>
              <dt className="text-muted-foreground">Så inne</dt>
              <dd>{formatRange(calendar.sowIndoors)}</dd>
            </>
          )}
          {hasCalendar && calendar.transplant && (
            <>
              <dt className="text-muted-foreground">Plante ut</dt>
              <dd>{formatRange(calendar.transplant)}</dd>
            </>
          )}
          {hasCalendar && calendar.sowOutdoors && (
            <>
              <dt className="text-muted-foreground">Så ute</dt>
              <dd>{formatRange(calendar.sowOutdoors)}</dd>
            </>
          )}
          {hasCalendar && calendar.harvest && (
            <>
              <dt className="text-muted-foreground">Høsting</dt>
              <dd>{formatRange(calendar.harvest)}</dd>
            </>
          )}
          <dt className="text-muted-foreground">Avstand</dt>
          <dd>{plant.spacing}</dd>
          <dt className="text-muted-foreground">Jord-pH</dt>
          <dd>{plant.soilPh}</dd>
          <dt className="text-muted-foreground">Rotdybde</dt>
          <dd>{plant.rootDepth}</dd>
          <dt className="text-muted-foreground">Næringsbehov</dt>
          <dd>{nutrientLabel[plant.nutrientNeed]}</dd>
          {plant.harvestDays && (
            <>
              <dt className="text-muted-foreground">Dager til høsting</dt>
              <dd>{plant.harvestDays} dager</dd>
            </>
          )}
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {plant.tips}
        </p>
      </div>
    </section>
  );
}
