"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What messaging channels does Zentro Desk support?",
    answer:
      "Zentro Desk supports WhatsApp Business (via WhatsApp Cloud API), Instagram DMs, Facebook Messenger, and a webchat widget you can embed on any website. The Starter plan includes 2 channels; Growth and Business plans include all four.",
  },
  {
    question: "How does the AI agent work?",
    answer:
      "The AI agent (powered by Claude) automatically handles incoming conversations across all connected channels. It replies to routine queries without any human intervention. When it can't resolve a conversation, it assigns it to a human agent with full context preserved.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately on a prorated basis. Downgrades apply at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — all paid plans come with a 14-day free trial. No credit card required. You get full access to every feature in your chosen plan during the trial.",
  },
  {
    question: "How does agent invite and role management work?",
    answer:
      "Owners and Admins can invite agents to the organization by email. Each agent is assigned a role — Owner, Admin, or Agent — with access controls that match their responsibility level.",
  },
  {
    question: "Can I connect multiple WhatsApp numbers?",
    answer:
      "Yes. You can create multiple WhatsApp inboxes within the same organization, each connected to a different phone number. All conversations appear in the same unified inbox.",
  },
]

export function PricingFAQ() {
  return (
    <section className="bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Everything you need to know about Zentro Desk pricing."}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
