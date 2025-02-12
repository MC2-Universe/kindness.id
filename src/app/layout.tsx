import { Providers } from "@/components/Providers"
import { PostHogPageViews } from "@/components/Providers/PostHogPageViews"
import { dystopian, inter } from "fonts"
import { type ReactNode, Suspense } from "react"
import "./globals.css"
import { OAuthResultToast } from "@/components/Providers/OAuthResultToast"
import { TermsOfUseUpdateDialog } from "@/components/TermsOfUseUpdateDialog"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import NextTopLoader from "nextjs-toploader"

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Kindness Profile",
  applicationName: "kindness.id",
  description:
    "Earn trust and rewards by sharing your kindness identity with the world",
  icons: {
    icon: "/upi.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#27272a" },
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
  ],
  colorScheme: "dark light",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            defer
            src="https://js.jam.dev/support/d00eb75d-44cf-48af-a274-ae7c828bb08e.js"
          />
        )}
      </head>
      <body className={cn(dystopian.variable, inter.variable)}>
        <NextTopLoader showSpinner={false} color="#656fdf" height={3} />

        <Providers>
          {children}

          <TermsOfUseUpdateDialog />
          <Suspense>
            <PostHogPageViews />
            <OAuthResultToast />
          </Suspense>
        </Providers>

        <canvas
          id="js-confetti-canvas"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 10001,
            pointerEvents: "none",
          }}
        />
      </body>
    </html>
  )
}
