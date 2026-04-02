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
  companion: "bg-sage",
  helpful: "bg-amber-earth",
  antagonist: "bg-terracotta",
};

const dotLabels = {
  companion: "Gode naboer — kan dele jord",
  helpful: "Nyttig i nærheten",
  antagonist: "Hold fra hverandre",
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
      <h2 className="text-lg font-semibold">Kompatibilitet</h2>

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
                      className="h-3.5 w-3.5 text-clay"
                    />
                    <span className="max-w-10 truncate text-[10px] font-normal text-muted-foreground">
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
                <td className="whitespace-nowrap pr-2 text-right text-xs">
                  {rowPlant.name}
                </td>
                {plants.map((colPlant, ci) => {
                  if (ri === ci) {
                    return (
                      <td key={colPlant.slug} className="p-0.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          <div className="h-1 w-1 rounded-full bg-border" />
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
                    <td key={colPlant.slug} className="p-0.5">
                      <button
                        type="button"
                        className={`flex h-5 w-5 items-center justify-center rounded-sm transition-colors hover:bg-secondary ${
                          isActive ? "bg-secondary" : ""
                        }`}
                        onClick={() =>
                          setActiveCell(
                            isActive ? null : { row: ri, col: ci, edge }
                          )
                        }
                      >
                        <div
                          className={`h-2.5 w-2.5 rounded-full ${
                            edge ? dotColors[edge.compatibility] : "bg-border"
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

      {activeCell && (
        <div className="text-sm">
          <span className="font-medium">
            {plants[activeCell.row].name} + {plants[activeCell.col].name}
          </span>
          {activeCell.edge ? (
            <div className="mt-1">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <div
                  className={`h-2 w-2 rounded-full ${
                    dotColors[activeCell.edge.compatibility]
                  }`}
                />
                {dotLabels[activeCell.edge.compatibility]}
              </div>
              <p className="mt-0.5 text-muted-foreground">
                {activeCell.edge.reason}
              </p>
              {activeCell.edge.citations.length > 0 && (
                <p className="mt-0.5 text-[11px] text-muted-foreground/50">
                  {activeCell.edge.citations.map((c, i) => (
                    <span key={i}>
                      {i > 0 && " · "}
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
            <p className="mt-0.5 text-muted-foreground">
              Ingen kjent interaksjon.
            </p>
          )}
        </div>
      )}

      <div className="flex gap-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-sage" />
          Samplanting
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-earth" />
          I nærheten
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-terracotta" />
          Unngå
        </span>
      </div>
    </div>
  );
}
