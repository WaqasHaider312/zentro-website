import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zentrodesk.com"),
  title: {
    default: "Zentro Desk — Omnichannel CRM with AI for E-commerce",
    template: "%s | Zentro Desk",
  },
  description:
    "Zentro Desk unifies WhatsApp, Instagram, Facebook Messenger, and webchat into one AI-powered inbox. Built for e-commerce teams that want faster support and less manual work.",
  keywords: [
    "WhatsApp CRM",
    "omnichannel CRM",
    "AI customer support",
    "ecommerce CRM",
    "WhatsApp business inbox",
    "multichannel inbox",
    "AI helpdesk",
    "customer support software",
    "WhatsApp support tool",
    "ecommerce helpdesk",
    "AI CRM for online stores",
    "unified inbox CRM",
  ],
  authors: [{ name: "Zentro Desk", url: "https://zentrodesk.com" }],
  creator: "Zentro Desk",
  publisher: "Zentro Desk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zentrodesk.com",
    siteName: "Zentro Desk",
    title: "Zentro Desk — Omnichannel CRM with AI for E-commerce",
    description:
      "Unify WhatsApp, Instagram, Facebook Messenger, and webchat in one AI-powered inbox. Let AI handle the routine. Your team handles the rest.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zentro Desk — Omnichannel CRM with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentro Desk — Omnichannel CRM with AI for E-commerce",
    description:
      "Unify WhatsApp, Instagram, Facebook Messenger, and webchat in one AI-powered inbox.",
    images: ["/og-image.png"],
    creator: "@zentrodesk",
  },
  alternates: {
    canonical: "https://zentrodesk.com",
  },
}

export const viewport: Viewport = {
  themeColor: "#4468E7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Script id="zentro-widget" strategy="afterInteractive">{`
          window.ZentroWidget = { token: '409acbbb-8f66-481b-9c59-1a975394e257' };
          (function(d,s){var js=d.createElement(s);js.src='https://zentro-desk-crm.vercel.app/widget.js';d.head.appendChild(js)})(document,'script');
        `}</Script>
      </body>
    </html>
  )
}