import Link from "next/link";
import { Leaf } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-emerald-600" />
          <span className="font-heading text-lg font-semibold">
            Companion Planting
          </span>
        </Link>
        <span className="hidden text-sm text-muted-foreground sm:inline">
          Find plants that thrive together
        </span>
      </div>
    </header>
  );
}
