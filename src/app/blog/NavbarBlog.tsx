import HamburgerMenu from '@/app/blog/components/HamburgerMenu'
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarBlog() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full font-alt shadow-md">
      <div className="h-20 max-w-full items-center justify-between bg-slate-900 px-4 md:flex md:px-24 lg:px-44 xl:px-64">
        <Link
          href="/blog"
          className="flex cursor-pointer items-center gap-1 text-2xl font-bold"
        >
          <Image
            src="/images/logo.svg"
            alt="Contec Sistemas"
            width={32}
            height={32}
          />
          <div className="max-w-0 overflow-hidden text-nowrap px-2 py-6 text-lg lg:max-w-64">
            <h1 className="pl-12 text-slate-200 lg:pl-0">
              CONTEC SISTEMAS <span className="text-blue-500">|</span>{' '}
              <span className="font-alt">BLOG</span>
            </h1>
          </div>
        </Link>
        <HamburgerMenu />
      </div>
    </nav>
  )
}
