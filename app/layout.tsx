// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import LayoutClient from './layout.client'

export const metadata: Metadata = {
  title: 'tope guipo | Virtual Assistant',
  description: 'tope guipo - Expert Virtual Assistant for GoHighLevel, Automation, and Tech Solutions',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'tope guipo | Virtual Assistant',
    description: 'Tech-savvy VA for GHL, Automation, and Systems',
    url: 'https://www.vaghl.com',
    images: [
      {
        url: '/myPhoto.jpg',
        width: 800,
        height: 600,
        alt: 'tope guipo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tope guipo | Virtual Assistant',
    description: 'Tech-savvy VA for GHL, Automation, and Systems',
    images: ['/myPhoto.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
