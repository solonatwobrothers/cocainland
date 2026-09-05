import { XButton } from "./x-button"
import { ContractAddress } from "./contract-address"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/40 to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 md:pt-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            Live on Solana
          </span>

          <h1 className="mt-5 font-display text-6xl leading-none tracking-wide text-foreground text-glow sm:text-7xl md:text-8xl">
            COCAINLAND
          </h1>

          <p className="mt-3 font-display text-3xl tracking-wide text-accent sm:text-4xl">
            $COCAIN
          </p>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            The purest, most degenerate meme coin on the Solana blockchain. One hit
            of $COCAIN and there is no coming back. Welcome to the land.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://dexscreener.com/solana/2d6ycttnyap32rt1ude8j8cd2xajcrjhjwn6kjiyxsuw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-base font-bold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              Buy $COCAIN
            </a>
            <XButton label="Join us on X" />
          </div>

          <div className="mt-8 flex justify-center">
            <ContractAddress />
          </div>
        </div>
      </div>
    </section>
  )
}
