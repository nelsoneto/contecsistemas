'use client'
import { Footer } from '@/components/Footer'
import { usePathname } from 'next/navigation'

export default function ConditionalFooter() {
  const pathname = usePathname()
  const isExcludedPage =
    pathname.startsWith('/blog/news') || pathname.startsWith('/blog/categories')

  if (isExcludedPage) {
    return null
  }

  return <Footer />
}
