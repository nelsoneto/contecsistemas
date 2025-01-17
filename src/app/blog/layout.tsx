import { ReactNode } from 'react'
import NavbarBlog from './NavbarBlog'

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <NavbarBlog />
      <main className="pt-36">{children}</main>
    </div>
  )
}
