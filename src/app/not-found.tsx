import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
        Page not found
      </p>
      <h1 className="font-display text-3xl text-slate-100">
        The page you are looking for is not here.
      </h1>
      <Link href="/" className="text-sm font-semibold text-electric">
        Return home
      </Link>
    </div>
  );
}
