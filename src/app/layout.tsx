// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Knowledge Portal ",
  description: "Knowledge Management Portal for African Rural and Agricultural Credit Association",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>

        {/* Navbar wrapped in Suspense */}
        <Suspense fallback={<div className="p-4 text-sm">Loading...</div>}>
          <Navbar />
        </Suspense>

        {/* Main content wrapped in Suspense */}
        <Suspense fallback={<div className="p-4 text-sm">Loading page...</div>}>
          <main className="flex-grow">
            {children}
          </main>
        </Suspense>

        {/* Footer (no hooks, safe) */}
        <Footer />

      </body>
    </html>
  )
}