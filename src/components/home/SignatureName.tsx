type SignatureNameProps = {
  className?: string;
  durationMs?: number;
};

export default function SignatureName({
  className = "",
  durationMs = 2000,
}: SignatureNameProps) {
  return (
    <div className={`relative ${className}`.trim()}>
      <span className="sr-only">Abraham Tobi Akomolafe</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 900 200"
        className="h-20 w-full max-w-3xl md:h-24"
      >
        <path
          d="M40 140c18-28 34-56 54-78 12-14 26-22 36-18 11 4 10 26-7 42-22 20-52 24-76 30 30-4 68-10 93-26 16-10 30-28 48-26 20 2 10 30-6 45-20 20-55 24-86 28 40-4 83-10 118-28 16-8 34-22 46-18 12 4 4 26-10 40-20 20-58 28-90 32 48-6 98-16 138-36 18-10 34-20 46-16 10 4 8 18 0 30-16 22-52 34-86 40 54-8 110-22 152-46 18-10 34-18 42-14 8 4 6 18-4 28-16 18-48 30-78 36 46-8 92-20 126-36 18-8 34-14 40-10 8 4 4 16-8 26-18 16-48 26-76 30 38-6 76-14 106-26 16-6 28-10 34-6 6 4 2 14-8 22-16 12-40 20-64 24"
          className="signature-path"
          style={{ animationDuration: `${durationMs}ms` }}
        />
      </svg>
    </div>
  );
}
