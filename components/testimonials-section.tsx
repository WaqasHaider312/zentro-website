const testimonials = [
  {
    quote:
      "Zentro Desk cut our WhatsApp response time from hours to under a minute. The AI handles most order status queries on its own — our team only touches the complex ones.",
    author: "Sana Mirza",
    role: "Customer Support Lead",
    company: "Velvet Threads",
    initials: "SM",
  },
  {
    quote:
      "Having WhatsApp, Instagram DMs, and Facebook Messenger all in one inbox changed everything. We used to miss messages daily. Now nothing slips through.",
    author: "Usman Tariq",
    role: "Operations Manager",
    company: "PakCart",
    initials: "UT",
  },
  {
    quote:
      "Setting up was surprisingly fast. We connected our WhatsApp and the AI was handling conversations the same day. The auto-assign rules made sure our agents got the right tickets.",
    author: "Hina Raza",
    role: "Head of Support",
    company: "Daraz Seller Hub",
    initials: "HR",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Trusted by e-commerce support teams
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="flex-1 text-foreground leading-relaxed">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-primary-foreground">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
