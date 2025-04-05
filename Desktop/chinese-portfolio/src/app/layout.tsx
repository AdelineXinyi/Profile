import type { Metadata } from "next";
import "./globals.css";
import Navigation from '@/components/ui/Navigation';

// Modern tech fonts

export const metadata: Metadata = {
  title: "Nature-Inspired Developer",
  description: "Frontend/Fullstack portfolio blending technology with natural aesthetics",
};

// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navigation />
        <main className="snap-y snap-mandatory h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  )
}