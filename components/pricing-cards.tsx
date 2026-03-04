"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "For small stores just getting started with customer support.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    popular: false,
    features: [
      "Up to 3 agents",
      "2 messaging channels",
      "AI agent included",
      "Conversation history (30 days)",
      "Basic reports",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For growing teams that need full omnichannel coverage.",
    monthlyPrice: 79,
    yearlyPrice: 66,
    popular: true,
    features: [
      "Up to 15 agents",
      "All 4 channels (WhatsApp, Instagram, Messenger, Webchat)",
      "AI agent with smart handoff",
      "Auto-assign rules",
      "SLA management",
      "Labels & canned responses",
      "Full conversation history",
      "Advanced reports",
    ],
  },
  {
    name: "Business",
    description: "For larger operations with high volume and custom needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    popular: false,
    features: [
      "Unlimited agents",
      "All channels",
      "Custom AI configuration",
      "Dedicated onboarding",
      "Priority support",
      "Custom integrations",
      "Role-based access control",
      "99.9% uptime SLA",
    ],
  },
]

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div>
      {/* Billing toggle */}
      <div className="mb-12 flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            isYearly ? "bg-primary" : "bg-muted"
          }`}
          role="switch"
          aria-checked={isYearly}
          aria-label="Toggle yearly billing"
        >
          <span
            className={`pointer-events-none block h-5 w-5 rounded-full bg-card shadow-lg ring-0 transition-transform ${
              isYearly ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          Yearly
        </span>
        {isYearly && (
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            Save 20%
          </span>
        )}
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              plan.popular
                ? "border-primary bg-card shadow-lg"
                : "border-border bg-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </div>

            <div className="mb-6">
              {plan.monthlyPrice !== null ? (
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /agent/month
                  </span>
                </div>
              ) : (
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">
                    Custom
                  </span>
                </div>
              )}
              {isYearly && plan.monthlyPrice !== null && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Billed annually
                </p>
              )}
            </div>

            <Button
              className="mb-8 w-full"
              variant={plan.popular ? "default" : "outline"}
              asChild
            >
              <Link href="#">
                {plan.monthlyPrice !== null
                  ? "Start Free Trial"
                  : "Contact Sales"}
              </Link>
            </Button>

            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
