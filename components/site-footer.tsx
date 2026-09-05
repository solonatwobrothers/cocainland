import { XButton } from "./x-button"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="relative overflow-hidden">
        <img
          src="/cocainland-banner.jpg"
          alt="COCAINLAND wide banner with cartoon degens running past a plate of powder"
          className="h-48 w-full object-cover sm:h-64"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 p-6 text-center">
          <p className="font-display text-3xl tracking-wide text-foreground text-glow sm:text-4xl">
            Enter COCAINLAND
          </p>
          <XButton label="Follow $COCAIN on X" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 text-center">
        <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted-foreground">
          $COCAIN is a meme coin created purely for entertainment and satire. It
          has no intrinsic value, no expectation of financial return, and is not
          affiliated with any illegal activity or substance. This is not financial
          advice. Do your own research.
        </p>
        <p className="mt-4 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} COCAINLAND. Built on Solana.
        </p>
      </div>
    </footer>
  )
}
