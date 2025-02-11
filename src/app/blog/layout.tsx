import NavbarBlog from '@/app/blog/components/NavbarBlog'
import { ReactNode } from 'react'

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <NavbarBlog />
      <main className="">{children}</main>
    </div>
  )
}
