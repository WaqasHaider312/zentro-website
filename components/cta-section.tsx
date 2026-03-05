import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center md:px-16 md:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
            Ready to transform your customer support?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Join e-commerce teams already using Zentro Desk to respond faster,
            handle more conversations, and never miss a customer message.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 px-8"
              asChild
            >
              <Link href="https://app.zentrodesk.com/signup">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/20 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}