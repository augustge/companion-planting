import {
  Apple,
  Bean,
  Carrot,
  Cherry,
  Citrus,
  Clover,
  Flower,
  Flower2,
  Grape,
  Hop,
  Leaf,
  LeafyGreen,
  Nut,
  Rose,
  Salad,
  Shrub,
  Sprout,
  TreeDeciduous,
  Vegan,
  Wheat,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  apple: Apple,
  bean: Bean,
  carrot: Carrot,
  cherry: Cherry,
  citrus: Citrus,
  clover: Clover,
  flower: Flower,
  "flower-2": Flower2,
  grape: Grape,
  hop: Hop,
  leaf: Leaf,
  "leafy-green": LeafyGreen,
  nut: Nut,
  rose: Rose,
  salad: Salad,
  shrub: Shrub,
  sprout: Sprout,
  "tree-deciduous": TreeDeciduous,
  vegan: Vegan,
  wheat: Wheat,
};

export function PlantIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Sprout;
  return <Icon className={className} />;
}
