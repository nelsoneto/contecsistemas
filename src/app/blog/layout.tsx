import ConditionalFooterBlog from '@/app/blog/components/ConditionalFooterBlog'
import NavbarBlog from '@/app/blog/components/NavbarBlog'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contec | Blog',
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarBlog />
      <main className="flex-grow pb-32">{children}</main>
      <ConditionalFooterBlog />
    </div>
  )
}
