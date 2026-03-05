import { Bot, Zap, Brain, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AISection() {
  return (
    <section className="bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              AI Engine
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              AI that handles conversations, not just suggestions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Zentro Desk's AI agent (powered by Claude) takes over incoming
              conversations, resolves what it can, and hands off to a human
              agent with full context when needed.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Automatic Conversation Handling
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    AI takes the first reply on every new conversation. It
                    understands context and responds naturally without any setup.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Smart Agent Handoff
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    When AI can't resolve the issue, it assigns the conversation
                    to the right agent along with full message history and context.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Works Across All Channels
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    The same AI agent handles conversations from WhatsApp,
                    Instagram, Facebook Messenger, and webchat — consistently.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button className="gap-2" asChild>
                <Link href="https://app.zentrodesk.com/signup">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  AI Assistant
                </span>
                <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Active
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <span className="text-xs font-medium text-muted-foreground">
                      JD
                    </span>
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-3">
                    <p className="text-sm text-foreground">
                      {"Hi, I placed an order 3 days ago but haven't received any update. My order number is #ORD-5521."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none border border-primary/20 bg-primary/5 px-4 py-3">
                    <p className="text-sm text-foreground">
                      {"I found your order #ORD-5521 — it was dispatched yesterday via TCS. Your tracking number is TCS-8834. Delivery expected by tomorrow. Shall I send the tracking link to your WhatsApp?"}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs text-primary">
                        AI resolved · 1.4s
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <span className="text-xs font-medium text-muted-foreground">
                      AK
                    </span>
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-secondary px-4 py-3">
                    <p className="text-sm text-foreground">
                      {"Yes please, that would be great. Thank you!"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-secondary p-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Confidence: 98%</span>
                  <span>Response time: 1.2s</span>
                  <span>Source: Order DB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}