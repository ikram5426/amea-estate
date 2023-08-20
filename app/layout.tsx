import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amēa Villas - Holiday Homes to Stay and Earn, up to 16.05%',
  description: 'Invest in one of Switzerland’s finest real estate projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        {children}</body>
    </html>
  )
}
