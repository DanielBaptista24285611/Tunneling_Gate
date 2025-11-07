import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Geist_Mono } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Porta Lógica Quântica de Tunelamento pelo Ruído",
  description: "Uma nova abordagem para preservar a coerência de qubits em sistemas quânticos abertos",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${merriweather.variable} font-serif antialiased`}>{children}</body>
    </html>
  )
}
