type TitleSliderUpProps = {
  items: string[];
  speedMs?: number;
  className?: string;
};

export default function TitleSliderUp({
  items,
  speedMs = 2600,
  className = "",
}: TitleSliderUpProps) {
  const combined = [...items, ...items];
  const durationMs = items.length * speedMs;
  return (
    <div className={`relative ${className}`.trim()}>
      <span className="sr-only">
        {items.join(", ")}
      </span>
      <div
        className="title-slider h-6 overflow-hidden text-sm font-semibold tracking-tight text-[#1F2937] md:h-7 md:text-base"
        aria-hidden="true"
      >
        <div
          className="title-slider-track"
          style={{ animationDuration: `${durationMs}ms` }}
        >
          {combined.map((item, index) => (
            <div key={`${item}-${index}`} className="flex h-6 items-center md:h-7">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="title-slider-static mt-0 hidden h-6 items-center text-sm font-semibold tracking-tight text-[#1F2937] md:h-7 md:text-base">
        {items[0]}
      </div>
    </div>
  );
}
