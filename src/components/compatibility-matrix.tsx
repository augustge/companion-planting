"use client";

import { useState } from "react";
import { PlantIcon } from "@/components/plant-icon";
import type { Plant, CompanionEdge, EvidenceLevel } from "@/lib/types";

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

const evidenceLabel: Record<EvidenceLevel, string> = {
  high: "sterk",
  moderate: "middels",
  low: "svak",
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
    <div className="space-y-4">
      <h2 className="font-serif text-lg tracking-tight text-clay">
        Kompatibilitet
      </h2>

      <div className="overflow-x-auto">
        <table className="border-collapse">
          <thead>
            <tr>
              <th />
              {plants.map((p) => (
                <th key={p.slug} className="px-0.5 pb-2">
                  <div className="flex flex-col items-center gap-0.5">
                    <PlantIcon
                      name={p.icon}
                      className="h-3.5 w-3.5 text-clay/60"
                    />
                    <span className="max-w-10 truncate font-serif text-[9px] font-normal italic text-clay/50">
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
                <td className="whitespace-nowrap pr-2 text-right font-serif text-[11px] italic text-clay">
                  {rowPlant.name}
                </td>
                {plants.map((colPlant, ci) => {
                  if (ri === ci) {
                    return (
                      <td key={colPlant.slug} className="p-0.5">
                        <div className="flex h-5 w-5 items-center justify-center">
                          <div className="h-px w-2 bg-clay/10" />
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
                        className={`flex h-5 w-5 items-center justify-center rounded-sm transition-colors hover:bg-linen ${
                          isActive ? "bg-linen" : ""
                        }`}
                        onClick={() =>
                          setActiveCell(
                            isActive ? null : { row: ri, col: ci, edge }
                          )
                        }
                      >
                        <div
                          className={`rounded-full ${
                            edge
                              ? `h-2.5 w-2.5 ${dotColors[edge.compatibility]}`
                              : "h-1 w-1 bg-clay/10"
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
        <div className="font-serif text-sm text-clay">
          <span className="italic">
            {plants[activeCell.row].name} + {plants[activeCell.col].name}
          </span>
          {activeCell.edge ? (
            <div className="mt-1.5 space-y-1">
              <div className="flex items-center gap-1.5 text-[13px]">
                <div
                  className={`h-2 w-2 rounded-full ${
                    dotColors[activeCell.edge.compatibility]
                  }`}
                />
                <span className="text-clay/70">
                  {dotLabels[activeCell.edge.compatibility]}
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-clay/80">
                {activeCell.edge.reason}
              </p>
              <p className="text-[11px] text-clay/40">
                Evidens: {evidenceLabel[activeCell.edge.evidence]}
                {activeCell.edge.citations.length > 0 && (
                  <span>
                    {" · "}
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
                  </span>
                )}
              </p>
            </div>
          ) : (
            <p className="mt-1 text-[13px] text-clay/50">
              Ingen kjent interaksjon.
            </p>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-1 font-serif text-[11px] text-clay/60">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
          Samplanting
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-earth" />
          I nærheten
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
          Unngå
        </span>
      </div>
    </div>
  );
}
