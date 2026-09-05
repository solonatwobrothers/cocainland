import { XButton } from "./x-button"

const links = [
  { href: "#about", label: "About" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#buy", label: "How to Buy" },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="font-display text-2xl tracking-wide text-foreground text-glow">
          COCAIN<span className="text-accent">LAND</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <XButton />
      </div>
    </header>
  )
}
