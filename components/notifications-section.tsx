import { Bell, BellRing, MessageSquare, AlertTriangle, CheckCircle2, Clock } from "lucide-react"

const notificationTypes = [
  {
    icon: BellRing,
    title: "New message from WhatsApp",
    description: "Customer Sarah T. sent a message about order #4821",
    time: "Just now",
    channel: "WhatsApp",
    channelColor: "#25D366",
    unread: true,
  },
  {
    icon: MessageSquare,
    title: "Instagram DM received",
    description: "New inquiry from @designstudio about enterprise pricing",
    time: "2 min ago",
    channel: "Instagram",
    channelColor: "#E4405F",
    unread: true,
  },
  {
    icon: AlertTriangle,
    title: "Priority escalation",
    description: "Ticket #7293 escalated to Level 2 support - VIP customer",
    time: "5 min ago",
    channel: "Messenger",
    channelColor: "#0084FF",
    unread: false,
  },
  {
    icon: CheckCircle2,
    title: "AI auto-resolved ticket",
    description: "Shipping query from webchat resolved with 97% confidence",
    time: "8 min ago",
    channel: "Webchat",
    channelColor: "hsl(225, 75%, 55%)",
    unread: false,
  },
]

export function NotificationsSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Notification preview */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Notification Center
                  </span>
                </div>
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                  4 new
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {notificationTypes.map((notification, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${
                      notification.unread
                        ? "bg-primary/5 border border-primary/10"
                        : "bg-background"
                    }`}
                  >
                    <div
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${notification.channelColor} 12%, transparent)`,
                        color: notification.channelColor,
                      }}
                    >
                      <notification.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {notification.title}
                        </p>
                        {notification.unread && (
                          <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                        )}
                      </div>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">
                        {notification.description}
                      </p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${notification.channelColor} 10%, transparent)`,
                            color: notification.channelColor,
                          }}
                        >
                          {notification.channel}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Clock className="h-2.5 w-2.5" />
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Real-Time Notifications
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Never miss a customer message
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Get instant notifications across all channels with smart priority
              routing. Urgent issues automatically surface to the top while AI
              handles routine queries in the background.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <BellRing className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Real-time push notifications across all devices
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Priority-based escalation rules and SLA tracking
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Smart filtering to reduce notification overload
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
