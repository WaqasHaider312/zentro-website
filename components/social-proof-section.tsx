"use client"

const companies = [
  {
    name: "Markaz Technologies",
    logo: "/logos/markaz.jpg",
    category: "Shopping",
  },
  {
    name: "EasyShip",
    logo: "/logos/easyship.png",
    category: "Logistics",
  },
  {
    name: "Pak Wheels",
    logo: "/logos/pakwheels.png",
    category: "Automotive",
  },
]

export function SocialProofSection() {
  const items = [...companies, ...companies]

  return (
    <section className="border-t border-border py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
          Trusted By
        </p>
        <h3 className="text-xl font-semibold text-foreground">
          Different teams across the world rely on Zentro Desk
        </h3>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex gap-5"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm"
              style={{ minWidth: "200px" }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-8 rounded-md object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">
                  {company.name}
                </p>
                <p className="text-xs text-muted-foreground">{company.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}