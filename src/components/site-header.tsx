"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Planlegger" },
  { href: "/browse", label: "Utforsk" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="pb-2 pt-8">
      <div className="mx-auto flex max-w-3xl items-baseline justify-between px-6">
        <Link
          href="/"
          className="font-serif text-xl font-semibold italic tracking-tight text-clay"
        >
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
                className={`font-serif text-sm transition-colors ${
                  active ? "text-clay" : "text-clay/40 hover:text-clay"
                }`}
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
