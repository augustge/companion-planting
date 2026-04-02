import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPlant, getCompanions, allSlugs } from "@/lib/plants";
import { PlantProfile } from "@/components/plant-profile";
import { CompanionList } from "@/components/companion-list";

export async function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) return {};
  return {
    title: plant.name,
    description: plant.description,
  };
}

export default async function PlantPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) notFound();

  const companions = getCompanions(slug);

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-8">
      <PlantProfile plant={plant} />
      <CompanionList companions={companions} />
    </div>
  );
}
