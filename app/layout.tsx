import type React from "react"
import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import "./globals.css"

// Load Archivo font with the SemiExpanded width variation
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "SuperteamNG - Once Upon a Web3 Dream",
  description: "The epic tale of SuperteamNG - Africa's first Solana Superteam chapter",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-archivo`}>{children}</body>
    </html>
  )
}
