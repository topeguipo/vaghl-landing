// app/layout.client.tsx
'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true })
  }, [])

  return <>{children}</>
}
