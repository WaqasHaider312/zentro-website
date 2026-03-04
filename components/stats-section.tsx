const stats = [
  { value: "10,000+", label: "Support Teams" },
  { value: "50M+", label: "Conversations Handled" },
  { value: "70%", label: "AI Resolution Rate" },
  { value: "<30s", label: "Avg. First Response" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
