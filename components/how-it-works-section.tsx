import { Button } from "@/components/ui/button"
import { FileText, Database, Zap } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section className="px-6 py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Mockup */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Laptop mockup */}
              <div className="bg-foreground rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-muted p-4 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-chart-2/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-3/60" />
                  </div>
                </div>
                <div className="bg-background p-6 space-y-4 h-64">
                  <div className="bg-muted rounded px-4 py-3 text-sm">
                    <span className="font-semibold">Website</span>
                    <span className="text-xs text-muted-foreground ml-2">upload</span>
                  </div>
                  <div className="bg-muted rounded px-4 py-3 text-sm">
                    <span className="font-semibold">Documentation</span>
                    <span className="text-xs text-muted-foreground ml-2">upload</span>
                  </div>
                  <div className="bg-muted rounded px-4 py-3 text-sm">
                    <span className="font-semibold">Help Center Articles</span>
                    <span className="text-xs text-muted-foreground ml-2">upload</span>
                  </div>
                  <div className="bg-chart-2/20 rounded px-4 py-3 text-sm border border-chart-2">
                    <span className="font-semibold text-chart-2">Knowledge indexed and ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Quick Setup</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Setup your all channels in 5minutes.
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're offical partner of Meta that enables our customers to setup their channels in few clicks.All you need is 5minutes for whole transition.
            </p>

            <Button size="lg" variant="outline" className="gap-2">
              Request a personalized demo
            </Button>

            <div className="mt-12 space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Connect Your Channels</h4>
                  <p className="text-sm text-muted-foreground">

                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI Starts Working Instantly</h4>
                  <p className="text-sm text-muted-foreground">
                    The AI agent handles incoming conversations from the moment your inbox is live
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
