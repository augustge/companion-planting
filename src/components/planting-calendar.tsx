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
      className={`absolute inset-y-0.5 rounded-sm ${className} ${
        dashed ? "border-2 border-dashed bg-transparent" : ""
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
    <div className="flex items-center gap-0">
      <div className="flex w-32 shrink-0 items-center gap-2 pr-3 sm:w-40">
        <PlantIcon name={plant.icon} className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="truncate text-sm font-medium">{plant.name}</span>
      </div>
      <div className="relative flex h-6 flex-1">
        {/* Grid lines */}
        {months.map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-l border-border/30"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}
        {calendar.sowIndoors && (
          <CalendarBar
            range={calendar.sowIndoors}
            className="border-indigo-400 bg-indigo-100"
            dashed
          />
        )}
        {calendar.transplant && (
          <CalendarBar
            range={calendar.transplant}
            className="bg-emerald-400/80"
          />
        )}
        {calendar.sowOutdoors && (
          <CalendarBar
            range={calendar.sowOutdoors}
            className="bg-emerald-400/80"
          />
        )}
        {calendar.harvest && (
          <CalendarBar
            range={calendar.harvest}
            className="bg-amber-400/80"
          />
        )}
      </div>
    </div>
  );
}

export function CalendarLegend() {
  return (
    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-3 w-6 rounded-sm border-2 border-dashed border-indigo-400 bg-indigo-100" />
        Sow indoors
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-3 w-6 rounded-sm bg-emerald-400/80" />
        Plant outdoors
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-3 w-6 rounded-sm bg-amber-400/80" />
        Harvest
      </span>
    </div>
  );
}

export function PlantingCalendar({ plants }: { plants: Plant[] }) {
  if (plants.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">Planting Calendar</h2>
        <span className="text-xs text-muted-foreground">
          Timings for Oslo / Southern Norway
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          {/* Month header */}
          <div className="flex items-center">
            <div className="w-32 shrink-0 sm:w-40" />
            <div className="flex flex-1">
              {months.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 text-center text-xs text-muted-foreground"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Plant rows */}
          <div className="mt-1 space-y-1">
            {plants.map((plant) => (
              <CalendarRow key={plant.slug} plant={plant} />
            ))}
          </div>
        </div>
      </div>

      <CalendarLegend />
    </div>
  );
}
