import ConditionalFooterBlog from '@/app/blog/components/ConditionalFooterBlog'
import NavbarBlog from '@/app/blog/components/NavbarBlog'
import { ReactNode } from 'react'

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
