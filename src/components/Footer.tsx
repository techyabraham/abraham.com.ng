import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/consulting", label: "Consulting" },
  { href: "/writing", label: "Writing" },
  { href: "/books", label: "Books" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/70 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-slate-100">
            Abraham Akomolafe
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Product developer. Growth strategist. Author. Speaker.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-100">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Abraham Akomolafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
