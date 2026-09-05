import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { About } from "@/components/about"
import { Tokenomics } from "@/components/tokenomics"
import { HowToBuy } from "@/components/how-to-buy"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Ticker />
      <About />
      <Tokenomics />
      <HowToBuy />
      <SiteFooter />
    </main>
  )
}
