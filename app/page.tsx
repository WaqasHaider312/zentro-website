import { Navbar } from "@/components/navbar"
import { RetalkHeroSection } from "@/components/retalk-hero-section"
import { ProblemCardsSection } from "@/components/problem-cards-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ScalabilitySection } from "@/components/scalability-section"
import { FeaturesSection } from "@/components/features-section"
import { ChannelsSection } from "@/components/channels-section"
import { AISection } from "@/components/ai-section"
import { PricingFAQ } from "@/components/pricing-faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Zentro Desk — Omnichannel CRM with AI for E-commerce",
  description:
    "Zentro Desk unifies WhatsApp, Instagram, Facebook Messenger, and webchat into one AI-powered inbox. Built for e-commerce teams that want faster support and less manual work.",
  alternates: { canonical: "https://zentrodesk.com" },
  openGraph: {
    title: "Zentro Desk — Omnichannel CRM with AI for E-commerce",
    description:
      "All your customer conversations, one AI-powered workspace. WhatsApp, Instagram, Facebook Messenger, and webchat — unified.",
    url: "https://zentrodesk.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zentro Desk",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Omnichannel CRM that unifies WhatsApp, Instagram, Facebook Messenger, and webchat in one AI-powered inbox for e-commerce teams.",
  url: "https://zentrodesk.com",
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "USD",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
  },
  featureList: [
    "WhatsApp Business Integration",
    "Instagram DM Management",
    "Facebook Messenger Support",
    "Webchat Widget",
    "AI Agent (Claude-powered)",
    "Auto-assign Rules",
    "Multi-tenant Architecture",
    "Team Role Management",
  ],
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <AISection />
        <PricingFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}