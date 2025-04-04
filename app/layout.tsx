import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/context/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import ScrollIndicator from "@/components/scroll-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Altieris Souza | Desenvolvedor Full Stack",
  description:
    "Portfolio de Altieris Souza, Desenvolvedor Full Stack com experiência em React, Next.js, TypeScript e mais.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <ScrollIndicator />
              <CursorEffect />
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'