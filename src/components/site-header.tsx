"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Planlegger" },
  { href: "/browse", label: "Utforsk" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="pb-2 pt-8">
      <div className="mx-auto flex max-w-3xl items-baseline justify-between px-6">
        <Link href="/" className="text-xl font-semibold italic tracking-tight">
          Samplanting
        </Link>
        <nav className="flex gap-5">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
