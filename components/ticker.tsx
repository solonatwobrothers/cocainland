const ITEMS = [
  "$COCAIN",
  "PURE MEME ENERGY",
  "BUILT ON SOLANA",
  "ONE HIT AND YOU ARE IN",
  "NOT FINANCIAL ADVICE",
  "TO THE MOON",
]

export function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y-2 border-primary/40 bg-primary/10 py-3">
      <div className="flex w-max animate-ticker gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-display text-xl tracking-wide text-foreground/90"
          >
            {item}
            <span className="ml-8 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
