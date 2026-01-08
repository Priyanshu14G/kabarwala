"use client"
import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"
import { ClerkProvider } from "@clerk/nextjs"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
    elements: {
      footer: "hidden",
    },
  }}>
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1a7c3f" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a3f2f" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${geist.className} antialiased bg-background text-foreground transition-colors`}>
        <ThemeInitializer>{children}</ThemeInitializer>
      </body>
    </html>
    </ClerkProvider>
  )
}

function ThemeInitializer({ children }: { children: React.ReactNode }) {
  "use client"

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return children
}

