import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NavbarBlog() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-slate-800 shadow-md">
      {/* Conteúdo da NavbarBlog */}
      <div className="flex items-center gap-x-4 p-4 px-60">
        <Link href="/blog">
          <h1 className="text-white">LOGO</h1>
        </Link>
        <Link href="/blog/news" passHref>
          <Button variant="default">Novidades</Button>
        </Link>
        <h1>Esta Pagina esta em Desenvolvimento.</h1>
      </div>
    </nav>
  )
}
