const cards = [
  {
    title: "100% Degen",
    body: "No roadmap, no promises, no mercy. $COCAIN is a pure meme experiment for the boldest of the bold.",
  },
  {
    title: "Solana Speed",
    body: "Lightning fast transactions and near-zero fees. The Solana blockchain keeps the party moving.",
  },
  {
    title: "Community Run",
    body: "The land belongs to the holders. No insiders, no VCs, just the degens who showed up.",
  },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          Welcome to the Land
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          COCAINLAND is where memes go to get uncut. A satirical token with zero
          utility and infinite vibes, riding the fastest chain in crypto.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
          >
            <h3 className="font-display text-2xl tracking-wide text-accent">
              {c.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
