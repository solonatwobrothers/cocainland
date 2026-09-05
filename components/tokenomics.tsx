const stats = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Buy / Sell Tax", value: "0%" },
  { label: "Liquidity", value: "Burned" },
  { label: "Contract", value: "Renounced" },
]

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 cyber-grid opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            Tokenomics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Clean and simple. The way pure supply should be.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-primary/40 bg-card/70 p-6 text-center backdrop-blur"
            >
              <p className="font-display text-2xl tracking-wide text-accent text-glow sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
