export function ScalabilitySection() {
  return (
    <section className="px-6 py-20 md:py-28 bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">Scalability</h3>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Support time that reduces a little more each day
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When Zentro Desk doesn't know an answer, it forwards the request to your team. Each human response becomes training data, making Zentro Desk smarter and reducing response time over time.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-foreground">Continuous learning from support interactions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-foreground">Reduce support volume by up to 80%</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-foreground">Faster response times with AI handling</p>
              </div>
            </div>
          </div>

          {/* Right side - Chart */}
          <div className="relative h-72 bg-card border border-border rounded-2xl p-8 flex items-end justify-center">
            <svg viewBox="0 0 300 200" className="w-full h-full">
              {/* Grid */}
              <line x1="40" y1="160" x2="280" y2="160" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="40" y1="120" x2="280" y2="120" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="40" y1="80" x2="280" y2="80" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="40" y1="40" x2="280" y2="40" stroke="#E5E7EB" strokeWidth="1" />

              {/* Axes */}
              <line x1="40" y1="160" x2="280" y2="160" stroke="#1F2937" strokeWidth="2" />
              <line x1="40" y1="160" x2="40" y2="20" stroke="#1F2937" strokeWidth="2" />

              {/* Y-axis label */}
              <text x="20" y="165" fontSize="12" fill="#6B7280" textAnchor="end">4</text>
              <text x="20" y="165" fontSize="12" fill="#6B7280" textAnchor="end">2.5h</text>
              <text x="20" y="165" fontSize="12" fill="#6B7280" textAnchor="end">0</text>

              {/* Curve line */}
              <path
                d="M 50 50 Q 120 80 180 130 T 280 160"
                fill="none"
                stroke="#4468E7"
                strokeWidth="3"
              />

              {/* Gradient fill under curve */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#4468E7", stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: "#4468E7", stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path
                d="M 50 50 Q 120 80 180 130 T 280 160 L 280 160 L 50 160 Z"
                fill="url(#gradient)"
              />

              {/* Data points */}
              <circle cx="50" cy="50" r="4" fill="#EF4444" stroke="white" strokeWidth="2" />
              <circle cx="180" cy="130" r="4" fill="#F59E0B" stroke="white" strokeWidth="2" />
              <circle cx="280" cy="160" r="4" fill="#10B981" stroke="white" strokeWidth="2" />

              {/* Labels */}
              <text x="50" y="25" fontSize="12" fill="#EF4444" fontWeight="bold" textAnchor="middle">5h</text>
              <text x="180" y="115" fontSize="12" fill="#F59E0B" fontWeight="bold" textAnchor="middle">2.5h</text>
              <text x="280" y="175" fontSize="12" fill="#10B981" fontWeight="bold" textAnchor="middle">18min</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
