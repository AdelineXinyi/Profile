import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nature-Inspired Developer",
  description: "Frontend/Fullstack portfolio blending technology with natural aesthetics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <main className="snap-y snap-mandatory h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  )
}