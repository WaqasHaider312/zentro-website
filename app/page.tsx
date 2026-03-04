import { Navbar } from "@/components/navbar"
import { RetalkHeroSection } from "@/components/retalk-hero-section"
import { ProblemCardsSection } from "@/components/problem-cards-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ScalabilitySection } from "@/components/scalability-section"
import { FeaturesSection } from "@/components/features-section"
import { ChannelsSection } from "@/components/channels-section"
import { PricingFAQ } from "@/components/pricing-faq"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Zentro Desk - Never Answer the Same Question Twice",
  description:
    "Never answer the same question twice. Zentro Desk is an intelligent CRM that handles up to 80% of support requests without human intervention.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <RetalkHeroSection />
        <ProblemCardsSection />
        <SolutionSection />
        <HowItWorksSection />
        <SocialProofSection />
        <ScalabilitySection />
        <FeaturesSection />
        <ChannelsSection />
        <PricingFAQ />
        <CTASection />
      </main>

    </div>
  )
}
