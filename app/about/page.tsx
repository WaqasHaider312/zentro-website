import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Target, Zap, Globe } from "lucide-react"

export const metadata = {
  title: "About — The Team Behind Zentro Desk",
  description: "Learn about Zentro Desk — an omnichannel AI CRM built for e-commerce businesses. Our mission, story, and the product we are building.",
  alternates: { canonical: "https://zentrodesk.com/about" },
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
              Built for e-commerce teams who take support seriously
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Zentro Desk is an omnichannel CRM built to unify customer conversations across WhatsApp, Instagram, Facebook Messenger, and webchat — with AI that actually handles them.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="border-t border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To give every e-commerce business — from solo sellers to large teams — a support system that actually works at scale. We believe great customer support shouldn't require a large team or complex tooling.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A world where online sellers never miss a customer message, AI handles the routine, and human agents focus only on conversations that need real empathy and judgment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-t border-border bg-card/50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Our Core Values
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "We constantly push the boundaries of what's possible with AI and automation to deliver cutting-edge solutions.",
                },
                {
                  icon: Users,
                  title: "Customer-First",
                  description: "Every decision we make is guided by the needs and feedback of our customers and their end-users.",
                },
                {
                  icon: Target,
                  title: "Reliability",
                  description: "We build systems you can trust, with 99.99% uptime and enterprise-grade security.",
                },
                {
                  icon: Globe,
                  title: "Accessibility",
                  description: "We believe powerful tools shouldn't be limited to large enterprises. We make them affordable for all.",
                },
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="rounded-lg border border-border p-6">
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { number: "500+", label: "Active Organizations" },
                { number: "2M+", label: "Conversations Handled" },
                { number: "4", label: "Channels Supported" },
                { number: "24/7", label: "AI Coverage" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History/Timeline Section */}
        <section className="border-t border-border bg-card/50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Our Journey
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "Founded",
                  description: "Zentro Desk was founded to solve a real problem: e-commerce businesses managing customer messages across multiple platforms with no unified system.",
                },
                {
                  year: "2024",
                  title: "Core Inbox Launched",
                  description: "Shipped the multi-tenant inbox with Facebook Messenger and Instagram DM support. Early customers reduced missed messages by over 80%.",
                },
                {
                  year: "2024",
                  title: "WhatsApp & Webchat Added",
                  description: "Launched WhatsApp Business integration and embeddable webchat widget, completing the four-channel omnichannel experience.",
                },
                {
                  year: "2025",
                  title: "AI Agent Released",
                  description: "Shipped the Claude-powered AI agent that automatically handles conversations across all channels and hands off to agents with full context.",
                },
                {
                  year: "2025",
                  title: "Auto-Assign & SLA",
                  description: "Added auto-assign rules, SLA management, canned responses, and labels — the full workflow toolkit for growing support teams.",
                },
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm">
                        {idx + 1}
                      </span>
                    </div>
                    {idx < 4 && (
                      <div className="h-12 w-0.5 bg-border my-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-primary mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}