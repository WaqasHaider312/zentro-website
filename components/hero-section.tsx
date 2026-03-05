import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/5" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Omnichannel CRM for e-commerce businesses
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            All your customer conversations, one workspace
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Zentro Desk unifies WhatsApp, Instagram, Facebook Messenger, and
            web chat into a single inbox. AI handles routine queries while your
            team focuses on customers who need a human touch.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <Link href="https://app.zentrodesk.com/signup">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
              <Link href="#features">See How It Works</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. 14-day free trial.
          </p>
        </div>

        {/* Preview card */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-lg md:p-6">
            {/* Mock toolbar */}
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                  <div className="h-3 w-3 rounded-full bg-chart-2/60" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Zentro Desk Dashboard
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-chart-2/10 px-2.5 py-0.5 text-xs font-medium text-chart-2">
                  All systems online
                </span>
              </div>
            </div>

            {/* Mock content */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-background p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    AI Resolved
                  </span>
                </div>
                <p className="font-display text-3xl font-bold text-foreground">
                  847
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  +23% from last week
                </p>
              </div>
              <div className="rounded-xl bg-background p-4">
                <div className="mb-3 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Active Chats
                  </span>
                </div>
                <p className="font-display text-3xl font-bold text-foreground">
                  124
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Across 4 channels
                </p>
              </div>
              <div className="rounded-xl bg-background p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Avg. Response
                  </span>
                </div>
                <p className="font-display text-3xl font-bold text-foreground">
                  {"<18s"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Down from 2m 34s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}