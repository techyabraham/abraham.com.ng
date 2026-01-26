import Section from "@/components/Section";
import { publications } from "@/lib/data";

export const metadata = {
  title: "Books | Abraham Akomolafe",
  description: "Books and long-form work by Abraham Akomolafe.",
};

export default function BooksPage() {
  return (
    <Section
      eyebrow="Books & Publications"
      title="Deep knowledge distilled into practical frameworks for builders and leaders."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {publications.map((book) => {
          const themeMap = {
            amber: "book-card-amber",
            blue: "book-card-blue",
            purple: "book-card-purple",
          };
          return (
            <div key={book.title} className="space-y-6">
              <div
                className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-2xl px-8 py-10 shadow-2xl ${themeMap[book.theme as keyof typeof themeMap]}`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-20 book-dots" />
                <div className="relative space-y-2 text-slate-100">
                  <h3 className="font-display text-2xl font-semibold">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-100/80">
                    {book.subtitle}
                  </p>
                </div>
                <div className="relative text-xs text-slate-100/80">
                  Abraham Akomolafe
                </div>
              </div>
              <p className="text-sm text-slate-400">{book.summary}</p>
              <div className="flex items-center gap-3">
                <a
                  href={book.href}
                  className="flex-1 rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2 text-center text-xs font-semibold text-slate-100 hover:border-slate-500"
                >
                  Read Sample
                </a>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-electric text-slate-950"
                  aria-label="Download"
                >
                  ↓
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">
        Available in digital and print formats • Free chapters for subscribers
      </p>
    </Section>
  );
}
