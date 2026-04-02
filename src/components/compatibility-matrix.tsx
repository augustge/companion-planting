"use client";

import { useState } from "react";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant, CompanionEdge } from "@/lib/types";

function getEdge(
  a: string,
  b: string,
  companions: CompanionEdge[]
): CompanionEdge | null {
  const sorted: [string, string] = a < b ? [a, b] : [b, a];
  return (
    companions.find(
      (e) => e.plants[0] === sorted[0] && e.plants[1] === sorted[1]
    ) ?? null
  );
}

const dotColors = {
  companion: "bg-emerald-500",
  helpful: "bg-amber-400",
  antagonist: "bg-red-500",
};

const dotLabels = {
  companion: "Good companions — can share soil",
  helpful: "Helpful nearby — plant close but not together",
  antagonist: "Keep apart",
};

export function CompatibilityMatrix({
  plants,
  companions,
}: {
  plants: Plant[];
  companions: CompanionEdge[];
}) {
  const [activeCell, setActiveCell] = useState<{
    row: number;
    col: number;
    edge: CompanionEdge | null;
  } | null>(null);

  if (plants.length < 2) return null;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Compatibility</h2>

      <div className="overflow-x-auto">
        <table className="border-collapse text-sm">
          <thead>
            <tr>
              <th />
              {plants.map((p) => (
                <th key={p.slug} className="px-1 pb-1">
                  <div className="flex flex-col items-center gap-0.5">
                    <PlantIcon
                      name={p.icon}
                      className="h-4 w-4 text-muted-foreground"
                    />
                    <span className="max-w-12 truncate text-[10px] font-normal text-muted-foreground">
                      {p.name}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plants.map((rowPlant, ri) => (
              <tr key={rowPlant.slug}>
                <td className="whitespace-nowrap pr-2 text-right text-xs font-medium">
                  <span className="flex items-center justify-end gap-1.5">
                    {rowPlant.name}
                    <PlantIcon
                      name={rowPlant.icon}
                      className="h-3.5 w-3.5 text-muted-foreground"
                    />
                  </span>
                </td>
                {plants.map((colPlant, ci) => {
                  if (ri === ci) {
                    return (
                      <td key={colPlant.slug} className="p-1">
                        <div className="flex h-6 w-6 items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-muted" />
                        </div>
                      </td>
                    );
                  }
                  const edge = getEdge(
                    rowPlant.slug,
                    colPlant.slug,
                    companions
                  );
                  const isActive =
                    activeCell?.row === ri && activeCell?.col === ci;
                  return (
                    <td key={colPlant.slug} className="p-1">
                      <button
                        type="button"
                        className={`flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-muted ${
                          isActive ? "ring-2 ring-ring" : ""
                        }`}
                        onClick={() =>
                          setActiveCell(
                            isActive ? null : { row: ri, col: ci, edge }
                          )
                        }
                      >
                        <div
                          className={`h-3 w-3 rounded-full ${
                            edge ? dotColors[edge.compatibility] : "bg-muted"
                          }`}
                        />
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail panel */}
      {activeCell && (
        <div className="rounded-lg border bg-card p-3 text-sm">
          <div className="flex items-center gap-2 font-medium">
            {plants[activeCell.row].name} + {plants[activeCell.col].name}
          </div>
          {activeCell.edge ? (
            <div className="mt-1 space-y-1">
              <div className="flex items-center gap-1.5">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    dotColors[activeCell.edge.compatibility]
                  }`}
                />
                <span className="text-muted-foreground">
                  {dotLabels[activeCell.edge.compatibility]}
                </span>
              </div>
              <p className="text-muted-foreground">{activeCell.edge.reason}</p>
              {activeCell.edge.citations.length > 0 && (
                <p className="text-xs text-muted-foreground/60">
                  Sources:{" "}
                  {activeCell.edge.citations.map((c, i) => (
                    <span key={i}>
                      {i > 0 && "; "}
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {c.label}
                        </a>
                      ) : (
                        c.label
                      )}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ) : (
            <p className="mt-1 text-muted-foreground">
              No known interaction between these plants.
            </p>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
          Companion
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-amber-400" />
          Helpful nearby
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
          Keep apart
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-muted" />
          Neutral
        </span>
      </div>
    </div>
  );
}
