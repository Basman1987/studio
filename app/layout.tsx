import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BASMAN STUDIO'S",
  description: "Crypto-related art services specializing in logos, banners, and marketing posters",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="neon-background"></div>
          <Navigation />
          <main className="relative z-10 pt-16">{children}</main>
        </div>
      </body>
    </html>
  )
}

