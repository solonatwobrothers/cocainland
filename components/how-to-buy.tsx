const steps = [
  {
    title: "Get a Wallet",
    body: "Download Phantom or Solflare and set up your Solana wallet in a couple of taps.",
  },
  {
    title: "Load up SOL",
    body: "Buy some SOL on any exchange and send it to your new wallet address.",
  },
  {
    title: "Swap for $COCAIN",
    body: "Head to Jupiter or Raydium, paste the contract address, and swap SOL for $COCAIN.",
  },
  {
    title: "Welcome to the Land",
    body: "Hold tight, meme hard, and enjoy the ride with the rest of the degens.",
  },
]

export function HowToBuy() {
  return (
    <section id="buy" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          How to Buy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Four steps to get your hands on the purest meme on Solana.
        </p>
      </div>

      <ol className="grid gap-6 md:grid-cols-2">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="flex gap-5 rounded-2xl border border-border bg-card p-6"
          >
            <span className="font-display text-4xl leading-none text-primary text-glow">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
