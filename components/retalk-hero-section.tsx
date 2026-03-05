import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function RetalkHeroSection() {
  return (
    <section className="relative px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left side - Problem statement */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-tight mb-6">
              We bet! Your support team won't have to do the same task again and again.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Discover Zentro Desk, the evolving AI CRM that instantly answers your customers,' questions,perform actions,reduces up to 80% of support requests and improves over time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gap-2 px-8 bg-foreground text-background hover:bg-foreground/90" asChild>
                <Link href="https://app.zentrodesk.com/signup">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              30-day free trial - no commitment
            </p>
          </div>

          {/* Right side - Chatbot demo widget */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-background" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Zentro Desk</p>
                  <p className="text-xs text-muted-foreground">Let's talk!</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground">⋯</button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-end">
                <div className="bg-primary/10 text-foreground rounded-xl rounded-tr-none px-4 py-2 text-sm max-w-xs">
                  Any doubt?
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="text-sm text-foreground bg-muted rounded-xl px-4 py-2">
                    How does Zentro Desk work?
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="text-sm text-foreground bg-muted rounded-xl px-4 py-2">
                    What channels do you support?
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <div className="text-sm text-foreground bg-muted rounded-xl px-4 py-2">
                    How do I connect my WhatsApp?
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-chart-2 text-white rounded-xl px-4 py-2 text-sm hover:bg-chart-2/90">
                  I want to start my free trial! 🚀
                </button>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Ask me anything"
                className="w-full px-4 py-3 rounded-full border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground text-background rounded-full p-2 hover:bg-foreground/90">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              By chatting, you agree to our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
