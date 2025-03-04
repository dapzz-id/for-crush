import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Just for You',
  description: 'Created by someone who loves you',
  generator: 'Developers Berkarya',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
