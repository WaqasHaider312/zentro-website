import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Industries — Omnichannel CRM for Online Sellers & E-commerce",
  description: "Zentro Desk is built for e-commerce businesses, online sellers, and retail brands that need AI-powered customer support across WhatsApp and social channels.",
  alternates: { canonical: "https://zentrodesk.com/industries" },
}

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Industries
            </p>
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
              Built for online sellers and e-commerce brands
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Whether you sell on your own website, through social media, or a marketplace, Zentro Desk adapts to how your customers reach you.
            </p>
          </div>
        </section>

        {/* Industries Grid */}


        {/* Industry Specific Benefits */}
        <section className="border-t border-border bg-card/50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Why Industries Choose Zentro Desk
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Industry-Specific Templates",
                  description: "Pre-built workflows, response templates, and knowledge bases tailored to your industry's standards and best practices.",
                },
                {
                  title: "Compliance Ready",
                  description: "HIPAA for Healthcare, PCI-DSS for Finance, GDPR for EU operations. We handle the compliance complexity.",
                },
                {
                  title: "Domain Expertise",
                  description: "Our AI is trained on industry-specific data, understanding your customers' unique pain points and needs.",
                },
                {
                  title: "Integration Hub",
                  description: "Pre-built integrations with industry-leading tools. Connect your entire tech stack in minutes.",
                },
                {
                  title: "Dedicated Support",
                  description: "Access to industry specialists who understand your business challenges and can guide you to success.",
                },
                {
                  title: "Benchmarking",
                  description: "Compare your support metrics against industry standards. Understand where you stand and how to improve.",
                },
              ].map((benefit, idx) => (
                <div key={idx} className="rounded-lg border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies by Industry */}
        <section className="border-t border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Success Stories by Industry
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  industry: "SaaS",
                  company: "TechFlow",
                  result: "45% reduction in support costs",
                  metric: "$200K savings annually",
                },
                {
                  industry: "E-commerce",
                  company: "ShopHub",
                  result: "67% faster response times",
                  metric: "18-second average response",
                },
                {
                  industry: "Healthcare",
                  company: "ClinicCare",
                  result: "85% patient satisfaction",
                  metric: "HIPAA compliant",
                },
                {
                  industry: "Finance",
                  company: "SecureBank",
                  result: "99.99% uptime",
                  metric: "PCI-DSS certified",
                },
                {
                  industry: "Education",
                  company: "LearnHub",
                  result: "3x student engagement",
                  metric: "24/7 AI assistant",
                },
                {
                  industry: "Travel & Hospitality",
                  company: "BookJourney",
                  result: "42% increase in bookings",
                  metric: "Through better customer service",
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
                >
                  <p className="text-sm font-semibold text-primary mb-2">
                    {story.industry}
                  </p>
                  <h3 className="font-semibold text-foreground mb-3">
                    {story.company}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {story.result}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {story.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to transform support in your industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with a free 14-day trial tailored to your industry.
            </p>
            <Button size="lg" asChild>
              <Link href="/pricing">Start Your Free Trial</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}