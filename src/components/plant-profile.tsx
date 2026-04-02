import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SunBadge, WaterBadge, FrostBadge } from "@/components/condition-badge";
import type { Plant } from "@/lib/types";

export function PlantProfile({ plant }: { plant: Plant }) {
  return (
    <section>
      <div className="mb-4">
        <span className="text-5xl">{plant.emoji}</span>
      </div>
      <h1 className="mb-2 text-2xl font-bold">{plant.name}</h1>
      <div className="mb-4 flex flex-wrap gap-2">
        <SunBadge value={plant.sun} />
        <WaterBadge value={plant.water} />
        <FrostBadge value={plant.frost} />
      </div>
      <p className="mb-6 text-muted-foreground">{plant.description}</p>

      <Card>
        <CardHeader>
          <CardTitle>Growing Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            {plant.sowIndoors && (
              <>
                <dt className="font-medium">Sow indoors</dt>
                <dd className="text-muted-foreground">{plant.sowIndoors}</dd>
              </>
            )}
            {plant.sowOutdoors && (
              <>
                <dt className="font-medium">Sow outdoors</dt>
                <dd className="text-muted-foreground">{plant.sowOutdoors}</dd>
              </>
            )}
            <dt className="font-medium">Spacing</dt>
            <dd className="text-muted-foreground">{plant.spacing}</dd>
            {plant.harvestDays && (
              <>
                <dt className="font-medium">Harvest</dt>
                <dd className="text-muted-foreground">{plant.harvestDays}</dd>
              </>
            )}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">{plant.tips}</p>
        </CardContent>
      </Card>
    </section>
  );
}
