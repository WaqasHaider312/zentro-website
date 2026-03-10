import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/pricing-cards"
import { PricingROISection } from "@/components/pricing-roi-section"
import { PricingComparison } from "@/components/pricing-comparison"
import { PricingFAQ } from "@/components/pricing-faq"

export const metadata = {
  title: "Pricing — Affordable Omnichannel CRM Plans",
  description: "Simple, transparent pricing for Zentro Desk. AI agent, WhatsApp, Instagram, Messenger, and webchat — all included. Start free, scale as you grow.",
  alternates: { canonical: "https://zentrodesk.com/pricing" },
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Pricing
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
                Simple, transparent pricing
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Start free and scale as your team grows. No hidden fees, no
                surprises. Cancel anytime.
              </p>
            </div>

            <PricingCards />
          </div>
        </section>

        <PricingROISection />
        <PricingComparison />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  )
}