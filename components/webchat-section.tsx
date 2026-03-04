"use client"

import { MessageCircle, Send, Paperclip, Smile, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WebchatSection() {
  return (
    <section className="bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Webchat Widget
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Beautiful live chat, right on your site
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Drop a fully customizable chat widget onto any website in minutes.
              Powered by AI for instant first responses, with seamless handoff
              to human agents when needed.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    AI-First Responses
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Instant answers from your knowledge base before agent
                    handoff
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Fully Customizable
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Match your brand colors, position, and greeting messages
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Widget preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
                {/* Widget header */}
                <div className="bg-primary px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                      <MessageCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">
                        Zentro Desk Support
                      </p>
                      <p className="text-xs text-primary-foreground/70">
                        Typically replies in under 30s
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-secondary px-3.5 py-2.5">
                      <p className="text-sm text-foreground">
                        {"Hey there! How can I help you today?"}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-none bg-primary px-3.5 py-2.5">
                      <p className="text-sm text-primary-foreground">
                        {"I need help with my subscription"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-secondary px-3.5 py-2.5">
                      <p className="text-sm text-foreground">
                        {"I'd be happy to help! Let me pull up your account details. One moment please."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input area */}
                <div className="border-t border-border p-3">
                  <div className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0 text-muted-foreground"
                      aria-label="Attach file"
                    >
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <span className="flex-1 text-sm text-muted-foreground">
                      Type a message...
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0 text-muted-foreground"
                      aria-label="Add emoji"
                    >
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-7 w-7 shrink-0"
                      aria-label="Send message"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
