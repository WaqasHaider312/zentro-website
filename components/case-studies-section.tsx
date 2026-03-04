import { TrendingUp, Clock, Users, ArrowRight } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      quote: "Zentro Desk helped us reduce response time by 67% while cutting support costs in half.",
      metrics: [
        { icon: Clock, value: "67%", label: "Faster Response" },
        { icon: TrendingUp, value: "45%", label: "Cost Reduction" },
        { icon: Users, value: "3x", label: "More Capacity" }
      ],
      avatar: "TFS"
    },
    {
      company: "GlobalMart Inc",
      industry: "E-commerce",
      quote: "The AI agent resolved 70% of customer issues without human intervention. Game changer.",
      metrics: [
        { icon: TrendingUp, value: "70%", label: "Autonomous Resolution" },
        { icon: Clock, value: "24/7", label: "Support Coverage" },
        { icon: Users, value: "2.5M+", label: "Monthly Conversations" }
      ],
      avatar: "GM"
    },
    {
      company: "HealthCare Digital",
      industry: "Healthcare",
      quote: "Patient satisfaction scores increased by 42% after implementing Zentro Desk.",
      metrics: [
        { icon: Users, value: "42%", label: "Satisfaction ↑" },
        { icon: TrendingUp, value: "55%", label: "Efficiency Gain" },
        { icon: Clock, value: "18s", label: "Avg. Response" }
      ],
      avatar: "HCD"
    }
  ]

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Real Results from Real Customers
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            See how industry leaders have transformed their customer support with Zentro Desk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-primary hover:bg-card hover:shadow-lg"
            >
              {/* Company info */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-semibold text-primary">{study.avatar}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{study.company}</h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="mb-8 flex-1 text-base leading-relaxed text-foreground italic">
                "{study.quote}"
              </p>

              {/* Metrics */}
              <div className="space-y-3 border-t border-border pt-6">
                {study.metrics.map((metric, j) => {
                  const Icon = metric.icon
                  return (
                    <div key={j} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                      <span className="font-semibold text-foreground">
                        {metric.value}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Read more */}
              <button className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                Read full case study <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
