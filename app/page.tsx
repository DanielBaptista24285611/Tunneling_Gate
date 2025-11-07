import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Abstract } from "@/components/abstract"
import { Introduction } from "@/components/introduction"
import { Theory } from "@/components/theory"
import { Results } from "@/components/results"
import { Discussion } from "@/components/discussion"
import { Conclusion } from "@/components/conclusion"
import { Credits } from "@/components/credits"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Abstract />
        <Introduction />
        <Theory />
        <Results />
        <Discussion />
        <Conclusion />
        <Credits />
      </main>
      <Footer />
    </div>
  )
}
