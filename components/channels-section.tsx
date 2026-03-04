import { MessageCircle } from "lucide-react"

const channels = [
  {
    name: "WhatsApp",
    description:
      "Connect your WhatsApp Business account to receive and reply to customer messages directly from Zentro Desk. AI handles routine queries; agents take over complex ones.",
    color: "#25D366",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.522 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.8 9.8 0 01-5.022-1.38l-.36-.214-3.742.982.999-3.648-.235-.374A9.79 9.79 0 012.18 12 9.82 9.82 0 0112 2.18 9.82 9.82 0 0121.82 12 9.82 9.82 0 0112 21.82z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    description:
      "Manage Instagram DMs from one unified inbox. Never miss a customer message from your Instagram audience — all replies go through the same agent workspace.",
    color: "#E4405F",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook Messenger",
    description:
      "Handle Facebook Page messages alongside your other channels. Full conversation history, AI-assisted replies, and agent handoff — all in one place.",
    color: "#0084FF",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.26-5.963 3.26L10.733 8.1l3.13 3.26L19.752 8.1l-6.559 6.863z" />
      </svg>
    ),
  },
  {
    name: "Webchat Widget",
    description:
      "Embed Zentro Desk's live chat widget on your website with a simple script tag. Visitors chat in real-time, and messages land straight in your inbox.",
    color: "hsl(var(--primary))",
    icon: <MessageCircle className="h-7 w-7" />,
  },
]

export function ChannelsSection() {
  return (
    <section id="channels" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Omnichannel Support
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Meet your customers where they already are
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Four channels, one inbox. No switching between apps, no lost
            context — every conversation in the same workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `color-mix(in srgb, ${channel.color} 12%, transparent)`,
                  color: channel.color,
                }}
              >
                {channel.icon}
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                {channel.name}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
