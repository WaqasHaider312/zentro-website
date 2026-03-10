import { BookOpen, AlertCircle, Zap } from "lucide-react"

export function ProblemCardsSection() {
  const problems = [
    {
      title: "Nobody reads the documentation",
      description:
        "FAQ, website, blog articles, newsletter... you deploy colossal resources to disseminate information, but nobody seems to read what you produce.What customer want is to ask questions through interface in their native language",
      icon: BookOpen,
    },
    {
      title: "Your customers are frustrated",
      description:
        "They want immediate answers to simple questions. Not spending 15 minutes digging through your site,FAQs or waiting for agent to respond. When they can't easily access the info, they lose patience, get angry, and leave.",
      icon: AlertCircle,
    },
    {
      title: "Your support team is overwhelmed",
      description:
        "Repeating the same thing 10 times a day is neither motivating nor rewarding. Despite their good will, your team exhausts itself managing operational tasks instead of focusing on what matters.",
      icon: Zap,
    },
  ]

  return (
    <section className="px-6 py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance mb-6">
            Every day, you exhaust yourself answering the same questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-8 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
