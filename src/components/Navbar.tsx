import Link from "next/link";
import Button from "./Button";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/consulting", label: "Consulting" },
  { href: "/writing", label: "Writing" },
  { href: "/books", label: "Books" },
  { href: "/speaking", label: "Speaking" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-slate-100"
        >
          Abraham Akomolafe
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/contact" variant="secondary">
            Work With Me
          </Button>
        </div>
      </div>
    </header>
  );
}
