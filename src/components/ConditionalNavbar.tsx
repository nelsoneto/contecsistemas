'use client'
import { Navbar } from '@/components/Navbar'
import { usePathname } from 'next/navigation'

export default function ConditionalNavbar() {
  const pathname = usePathname()
  const isBlogPage = pathname.startsWith('/blog')

  if (isBlogPage) {
    return null
  }

  return <Navbar />
}
