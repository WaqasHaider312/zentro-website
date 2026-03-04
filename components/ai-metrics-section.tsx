import { TrendingUp, Clock, Brain, Zap } from "lucide-react"

export function AIMetricsSection() {
  const metrics = [
    {
      icon: Brain,
      value: "65%",
      label: "Cases Resolved Autonomously",
      description: "AI handles routine inquiries without human intervention"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Instant Customer Support",
      description: "Always-on support in 50+ languages"
    },
    {
      icon: TrendingUp,
      value: "2.5M+",
      label: "Conversations Handled",
      description: "Daily conversations powered by AI"
    },
    {
      icon: Zap,
      value: "<18s",
      label: "Average Response Time",
      description: "Near-instantaneous customer support"
    }
  ]

  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            AI That Works Smarter, Not Harder
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our AI agent is trained on millions of customer interactions to understand context, intent, and sentiment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-card"
              >
                <Icon className="mb-4 h-10 w-10 text-primary" />
                <div className="mb-3 text-4xl font-bold text-foreground">
                  {metric.value}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {metric.label}
                </h3>
                <p className="text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
