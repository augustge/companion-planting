import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SunBadge, WaterBadge, FrostBadge } from "@/components/condition-badge";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant, MonthRange } from "@/lib/types";

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatRange(range: MonthRange): string {
  return `${monthNames[range[0] - 1]}–${monthNames[range[1] - 1]}`;
}

export function PlantProfile({ plant }: { plant: Plant }) {
  const { calendar } = plant;

  return (
    <section>
      <div className="mb-4">
        <PlantIcon name={plant.icon} className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="mb-1 text-2xl font-bold">{plant.name}</h1>
      <p className="mb-3 text-sm italic text-muted-foreground">
        {plant.species}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        <SunBadge value={plant.sun} />
        <WaterBadge value={plant.water} />
        <FrostBadge value={plant.frost} />
      </div>
      <p className="mb-6 text-muted-foreground">{plant.description}</p>

      <Card>
        <CardHeader>
          <CardTitle>Dyrkingsguide</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            {calendar.sowIndoors && (
              <>
                <dt className="font-medium">Så inne</dt>
                <dd className="text-muted-foreground">
                  {formatRange(calendar.sowIndoors)}
                </dd>
              </>
            )}
            {calendar.transplant && (
              <>
                <dt className="font-medium">Plante ut</dt>
                <dd className="text-muted-foreground">
                  {formatRange(calendar.transplant)}
                </dd>
              </>
            )}
            {calendar.sowOutdoors && (
              <>
                <dt className="font-medium">Så ute</dt>
                <dd className="text-muted-foreground">
                  {formatRange(calendar.sowOutdoors)}
                </dd>
              </>
            )}
            {calendar.harvest && (
              <>
                <dt className="font-medium">Høsting</dt>
                <dd className="text-muted-foreground">
                  {formatRange(calendar.harvest)}
                </dd>
              </>
            )}
            <dt className="font-medium">Avstand</dt>
            <dd className="text-muted-foreground">{plant.spacing}</dd>
            {plant.harvestDays && (
              <>
                <dt className="font-medium">Dager til høsting</dt>
                <dd className="text-muted-foreground">
                  {plant.harvestDays} dager
                </dd>
              </>
            )}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">{plant.tips}</p>
        </CardContent>
      </Card>
    </section>
  );
}
