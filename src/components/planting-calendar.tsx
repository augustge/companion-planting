import { PlantIcon } from "@/components/plant-icon";
import type { Plant, MonthRange } from "@/lib/types";

const MONTHS = ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"];
const CURRENT_MONTH = new Date().getMonth(); // 0-indexed

function hasCalendarData(plant: Plant): boolean {
  const c = plant.calendar;
  return !!(c.sowIndoors || c.transplant || c.sowOutdoors || c.harvest);
}

function barStyle(range: MonthRange) {
  const start = ((range[0] - 1) / 12) * 100;
  const width = ((range[1] - range[0] + 1) / 12) * 100;
  return { left: `${start}%`, width: `${width}%` } as const;
}

function CalendarRow({ plant }: { plant: Plant }) {
  const { calendar } = plant;

  return (
    <div className="group flex items-center">
      {/* Plant name */}
      <div className="flex w-[100px] shrink-0 items-center gap-1.5 pr-2 sm:w-[140px]">
        <PlantIcon name={plant.icon} className="h-3.5 w-3.5 shrink-0 text-clay" />
        <span className="truncate font-serif text-[13px] italic text-clay">
          {plant.name}
        </span>
      </div>

      {/* Bar area */}
      <div className="relative h-6 flex-1">
        {/* Month grid lines */}
        {MONTHS.map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-l border-clay/[0.07]"
            style={{ left: `${(i / 12) * 100}%` }}
          />
        ))}
        {/* Right edge */}
        <div className="absolute top-0 right-0 bottom-0 border-l border-clay/[0.07]" />

        {/* Current month highlight */}
        <div
          className="absolute top-0 bottom-0 bg-terracotta/[0.06]"
          style={{
            left: `${(CURRENT_MONTH / 12) * 100}%`,
            width: `${(1 / 12) * 100}%`,
          }}
        />

        {/* Bars — layered from back to front */}
        <div className="absolute inset-0 flex items-center">
          {calendar.sowIndoors && (
            <div
              className="absolute h-2 rounded-full border border-dashed border-sage/60 bg-sage/15"
              style={barStyle(calendar.sowIndoors)}
            />
          )}
          {calendar.transplant && (
            <div
              className="absolute h-2 rounded-full bg-sage"
              style={barStyle(calendar.transplant)}
            />
          )}
          {calendar.sowOutdoors && (
            <div
              className="absolute h-2 rounded-full bg-sage"
              style={barStyle(calendar.sowOutdoors)}
            />
          )}
          {calendar.harvest && (
            <div
              className="absolute h-2 rounded-full bg-amber-earth"
              style={barStyle(calendar.harvest)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function CalendarLegend() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 font-serif text-[11px] text-clay/70">
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-1.5 w-1.5 rounded-full border border-dashed border-sage/60 bg-sage/15" />
        Forspiring inne
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
        Plante / s&aring; ut
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-earth" />
        H&oslash;sting
      </span>
    </div>
  );
}

export function PlantingCalendar({ plants }: { plants: Plant[] }) {
  const calendarPlants = plants.filter(hasCalendarData);
  if (calendarPlants.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-baseline justify-between">
        <h2 className="font-serif text-lg tracking-tight text-clay">
          Plantekalender
        </h2>
        <span className="font-serif text-[11px] italic text-clay/50">
          Oslo / S&oslash;r-Norge
        </span>
      </div>

      {/* Calendar */}
      <div className="overflow-x-auto">
        <div className="min-w-[460px]">
          {/* Month headers */}
          <div className="flex items-end pb-1">
            <div className="w-[100px] shrink-0 sm:w-[140px]" />
            <div className="flex flex-1">
              {MONTHS.map((m, i) => (
                <div
                  key={m}
                  className={`flex-1 text-center font-serif text-[10px] tracking-wide ${
                    i === CURRENT_MONTH
                      ? "font-medium text-terracotta"
                      : "text-clay/40"
                  }`}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Current month indicator line in header */}
          <div className="flex">
            <div className="w-[100px] shrink-0 sm:w-[140px]" />
            <div className="relative h-px flex-1">
              <div className="h-px w-full bg-clay/[0.07]" />
              <div
                className="absolute top-0 h-px bg-terracotta/30"
                style={{
                  left: `${(CURRENT_MONTH / 12) * 100}%`,
                  width: `${(1 / 12) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Plant rows */}
          <div className="space-y-0">
            {calendarPlants.map((plant) => (
              <CalendarRow key={plant.slug} plant={plant} />
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <CalendarLegend />
    </div>
  );
}
