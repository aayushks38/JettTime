import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JettTime - Premium Travel Experiences',
  description: 'Discover unforgettable travel experiences with JettTime. Explore stunning destinations, curated packages, and exclusive offers.',
  keywords: 'travel, tourism, destinations, vacation, packages, flights, hotels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark">
        {children}
      </body>
    </html>
  )
}
