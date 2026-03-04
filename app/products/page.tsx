import { Navbar } from "@/components/navbar"
import { ProductSuitesSection } from "@/components/product-suites-section"
import { FeaturesSection } from "@/components/features-section"
import { ChannelsSection } from "@/components/channels-section"
import { NotificationsSection } from "@/components/notifications-section"
import { WebchatSection } from "@/components/webchat-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Products - Zentro Desk",
  description:
    "Explore Zentro Desk's comprehensive suite of AI-powered customer support products.",
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Products
            </p>
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
              Everything you need for customer success
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              A unified platform with modular products designed to work together seamlessly, or standalone to fit your specific needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link href="https://zentrodesk.com/signup">Start Free Trial</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Product Suites */}
        <ProductSuitesSection />

        {/* Core Features */}
        <section id="features" className="border-t border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Core Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful capabilities built into every plan
              </p>
            </div>
            <FeaturesSection />
          </div>
        </section>

        {/* Omnichannel Support */}
        <section className="border-t border-border bg-card/50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <ChannelsSection />
          </div>
        </section>



        {/* Notifications */}
        <section className="border-t border-border bg-card/50 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <NotificationsSection />
          </div>
        </section>

        {/* Webchat */}
        <section className="border-t border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <WebchatSection />
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to transform your support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with a free 14-day trial. No credit card required.
            </p>
            <Button size="lg" asChild>
              <Link href="https://zentrodesk.com/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </section>
      </main>

    </div>
  )
}