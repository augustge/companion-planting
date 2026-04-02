import { PlantIcon } from "@/components/plant-icon";
import type { Plant, MonthRange } from "@/lib/types";

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function CalendarBar({
  range,
  className,
  dashed,
}: {
  range: MonthRange;
  className: string;
  dashed?: boolean;
}) {
  return (
    <div
      className={`absolute inset-y-1 rounded-[2px] ${className} ${
        dashed ? "border border-dashed bg-transparent" : ""
      }`}
      style={{
        left: `${((range[0] - 1) / 12) * 100}%`,
        width: `${((range[1] - range[0] + 1) / 12) * 100}%`,
      }}
    />
  );
}

function CalendarRow({ plant }: { plant: Plant }) {
  const { calendar } = plant;

  return (
    <div className="flex items-center">
      <div className="flex w-28 shrink-0 items-center gap-1.5 pr-3 sm:w-36">
        <PlantIcon name={plant.icon} className="h-3.5 w-3.5 shrink-0 text-clay" />
        <span className="truncate text-sm">{plant.name}</span>
      </div>
      <div className="relative flex h-5 flex-1">
        {months.map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-l border-border/20"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}
        {calendar.sowIndoors && (
          <CalendarBar
            range={calendar.sowIndoors}
            className="border-sage bg-transparent"
            dashed
          />
        )}
        {calendar.transplant && (
          <CalendarBar
            range={calendar.transplant}
            className="bg-sage/40"
          />
        )}
        {calendar.sowOutdoors && (
          <CalendarBar
            range={calendar.sowOutdoors}
            className="bg-sage/40"
          />
        )}
        {calendar.harvest && (
          <CalendarBar
            range={calendar.harvest}
            className="bg-amber-earth/40"
          />
        )}
      </div>
    </div>
  );
}

export function PlantingCalendar({ plants }: { plants: Plant[] }) {
  if (plants.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">Plantekalender</h2>
        <span className="text-[11px] text-muted-foreground">
          Oslo / Sør-Norge
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[420px]">
          <div className="flex items-center">
            <div className="w-28 shrink-0 sm:w-36" />
            <div className="flex flex-1">
              {months.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 text-center text-[11px] text-muted-foreground"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-0.5 space-y-0.5">
            {plants.map((plant) => (
              <CalendarRow key={plant.slug} plant={plant} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-1 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-4 rounded-[2px] border border-dashed border-sage" />
          Så inne
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-4 rounded-[2px] bg-sage/40" />
          Plante ut
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-4 rounded-[2px] bg-amber-earth/40" />
          Høste
        </span>
      </div>
    </div>
  );
}
