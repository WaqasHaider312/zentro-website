import { MessageSquare, Zap, Bot, BookOpen, BarChart3, Users } from "lucide-react"

export function ProductSuitesSection() {
  const suites = [
    {
      icon: MessageSquare,
      title: "Support Hub",
      description: "Unified support across all channels with AI-powered routing and triage"
    },
    {
      icon: Zap,
      title: "Engagement Platform",
      description: "Proactive outreach and customer engagement automation"
    },
    {
      icon: Bot,
      title: "AI Agent Suite",
      description: "Conversational AI that resolves 65% of cases autonomously"
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Self-service portal that reduces support tickets by 40%"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Real-time dashboards and predictive analytics for customer success"
    },
    {
      icon: Users,
      title: "Collaboration Hub",
      description: "Team collaboration tools to accelerate resolution times"
    }
  ]

  return (
    <section id="product" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Complete Customer Support Platform
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to manage customer relationships, resolve issues faster, and build loyalty.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {suites.map((suite, i) => {
            const Icon = suite.icon
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-primary hover:bg-card hover:shadow-lg"
              >
                <Icon className="mb-4 h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {suite.title}
                </h3>
                <p className="text-muted-foreground">
                  {suite.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
