import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { About } from "@/components/about"
import { Tokenomics } from "@/components/tokenomics"
import { HowToBuy } from "@/components/how-to-buy"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <img
          src="/cocainland-square.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover opacity-20 blur-3xl"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-10">
        <SiteNav />
        <Hero />
        <Ticker />
        <About />
        <Tokenomics />
        <HowToBuy />
        <SiteFooter />
      </div>
    </main>
  )
}
