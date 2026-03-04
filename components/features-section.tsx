import {
  Bot,
  Bell,
  Users,
  BarChart3,
  Clock,
  Shield,
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Agent (Claude-Powered)",
    description:
      "An AI agent handles incoming conversations automatically. When it can't resolve the issue, it hands off to a human agent with full context — no customer repeats themselves.",
  },
  {
    icon: Bell,
    title: "Auto-Assign Rules",
    description:
      "Define rules to automatically route conversations to the right agent or team based on channel, keyword, or time of day. Zero manual triage.",
  },
  {
    icon: Users,
    title: "Team & Role Management",
    description:
      "Invite agents to your organization with role-based access — Owner, Admin, or Agent. Each role has the right level of control without clutter.",
  },
  {
    icon: BarChart3,
    title: "Conversation Reports",
    description:
      "Track open, resolved, and AI-handled conversations. Understand agent workload, response times, and resolution rates at a glance.",
  },
  {
    icon: Clock,
    title: "SLA & Ticket Labels",
    description:
      "Set SLA targets per inbox, label conversations for easy filtering, and use canned responses to answer common questions in seconds.",
  },
  {
    icon: Shield,
    title: "Multi-Tenant & Isolated",
    description:
      "Each organization gets a fully isolated workspace. Data, inboxes, agents, and conversations are completely separate per org.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Everything your support team actually needs
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From AI automation to team management, Zentro Desk gives your team
            the tools to respond faster and keep customers happy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
