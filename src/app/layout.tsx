// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"    // ← Import Navbar
import Footer from "@/components/Footer"    // ← Import Footer

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Knowledge Portal ",
  description: "Knowledge Management Portal for African Rural and Agricultural Credit Association",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        
        {/* ← Navbar at top */}
        <Navbar />
        
        {/* ← Main content (grows to fill space) */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* ← Footer at bottom */}
        <Footer />
        
      </body>
    </html>
  )
}