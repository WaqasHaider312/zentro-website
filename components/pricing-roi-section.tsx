import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

export function PricingROISection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Invest in Support That Pays for Itself
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Most customers see ROI within 30 days. Here's what you can expect.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <DollarSign className="mb-4 h-8 w-8 text-chart-3" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Cost Reduction
            </h3>
            <p className="mb-4 font-display text-3xl font-bold text-foreground">
              40-50%
            </p>
            <p className="text-sm text-muted-foreground">
              Lower support operational costs with AI automation
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <Clock className="mb-4 h-8 w-8 text-chart-2" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Response Time
            </h3>
            <p className="mb-4 font-display text-3xl font-bold text-foreground">
              67% Faster
            </p>
            <p className="text-sm text-muted-foreground">
              Reduce average response time from 2+ hours to 18 seconds
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <Users className="mb-4 h-8 w-8 text-chart-4" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Team Capacity
            </h3>
            <p className="mb-4 font-display text-3xl font-bold text-foreground">
              3x More
            </p>
            <p className="text-sm text-muted-foreground">
              Handle 3x more conversations with your existing team
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <TrendingUp className="mb-4 h-8 w-8 text-chart-5" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Customer Satisfaction
            </h3>
            <p className="mb-4 font-display text-3xl font-bold text-foreground">
              +42%
            </p>
            <p className="text-sm text-muted-foreground">
              Higher CSAT scores from faster, smarter support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
