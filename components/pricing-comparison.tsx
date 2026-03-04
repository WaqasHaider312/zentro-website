"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingComparison() {
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "professional" | "enterprise">("professional")

  const features = [
    { category: "Core Features", items: [
      { name: "Agents", starter: "Up to 3", professional: "Up to 15", enterprise: "Unlimited" },
      { name: "Messaging channels", starter: "2", professional: "All 4", enterprise: "All 4 + Custom" },
      { name: "Conversation history", starter: "30 days", professional: "1 year", enterprise: "Unlimited" },
      { name: "Contacts & profiles", starter: true, professional: true, enterprise: true },
    ]},
    { category: "AI & Automation", items: [
      { name: "AI agent (Claude-powered)", starter: true, professional: true, enterprise: true },
      { name: "Smart agent handoff", starter: true, professional: true, enterprise: true },
      { name: "Auto-assign rules", starter: false, professional: true, enterprise: true },
      { name: "Custom AI configuration", starter: false, professional: false, enterprise: true },
    ]},
    { category: "Team & Workflow", items: [
      { name: "Role-based access (Owner/Admin/Agent)", starter: true, professional: true, enterprise: true },
      { name: "Agent invites by email", starter: true, professional: true, enterprise: true },
      { name: "Labels & canned responses", starter: false, professional: true, enterprise: true },
      { name: "SLA management", starter: false, professional: true, enterprise: true },
    ]},
    { category: "Reports & Support", items: [
      { name: "Basic conversation reports", starter: true, professional: true, enterprise: true },
      { name: "Advanced analytics", starter: false, professional: true, enterprise: true },
      { name: "Email support", starter: true, professional: true, enterprise: true },
      { name: "Priority support", starter: false, professional: true, enterprise: true },
      { name: "Dedicated onboarding", starter: false, professional: false, enterprise: true },
    ]},
  ]

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Compare Plans
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            All plans include a 14-day free trial. See what's included in each.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card/30">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Starter</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Growth</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">Business</th>
              </tr>
            </thead>
            <tbody>
              {features.map((group, groupIdx) => (
                <tbody key={groupIdx}>
                  <tr className="border-b border-border bg-background/50">
                    <td colSpan={4} className="px-6 py-4 font-semibold text-foreground">
                      {group.category}
                    </td>
                  </tr>
                  {group.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className="border-b border-border hover:bg-background/50">
                      <td className="px-6 py-4 text-foreground">{item.name}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof item.starter === "boolean" ? (
                          item.starter ? (
                            <Check className="mx-auto h-5 w-5 text-chart-2" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-muted-foreground opacity-30" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{item.starter}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof item.professional === "boolean" ? (
                          item.professional ? (
                            <Check className="mx-auto h-5 w-5 text-chart-2" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-muted-foreground opacity-30" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{item.professional}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof item.enterprise === "boolean" ? (
                          item.enterprise ? (
                            <Check className="mx-auto h-5 w-5 text-chart-2" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-muted-foreground opacity-30" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{item.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Need more details? {'   '}
            <button className="font-medium text-primary hover:underline">
              Contact our sales team
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
