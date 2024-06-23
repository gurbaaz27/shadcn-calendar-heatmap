import "./globals.css"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { GeistSans } from "geist/font/sans"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/sonner"
import DarkThemeProvider from "@/providers/ThemeProvider"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "React",
    "one-time-code",
    "Input",
    "Next.js",
    "Tailwind CSS",
    "Server Components",
    "Accessible",
  ],
  authors: [
    {
      name: "gurbaaz",
      url: "https://gurbaaz.me",
    },
  ],
  creator: "gurbaaz",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@GurbaazNandra",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-[100dvh] bg-background font-sans antialiased",
          GeistSans.className
        )}
      >
        <DarkThemeProvider>
          <div className="relative flex min-h-[100dvh] flex-col bg-background">
            <SiteHeader />
            <main className="flex-1 flex flex-col">{children}</main>
            <SiteFooter />
          </div>
        </DarkThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
