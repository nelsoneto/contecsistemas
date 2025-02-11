/* eslint-disable prettier/prettier */
'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Links = [
  { id: 1, name: 'Noticias', href: '/blog/news' },
  { id: 2, name: 'Sobre', href: '/' },
]

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Menu icon */}
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-3 h-7 w-7 cursor-pointer py-4 md:hidden"
      >
        {open ? <X /> : <Menu />}
      </div>
      {/* link items */}
      <ul
        className={`absolute left-0 pr-4 z-[-1] w-full justify-items-center bg-slate-900 pb-4 transition-all duration-500 ease-linear md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${open ? 'top-12' : 'top-[-490px]'
          }`}
      >
        {Links.map((link) => (
          <li key={link.id} className="my-9 md:my-0 md:ml-8">
            <a
              href={link.href}
              className="flex w-full rounded-md border-2  border-transparent px-3 py-2 ring-offset-blue-500 text-zinc-100 transition-colors hover:bg-slate-800 focus:border-blue-500 focus:outline-none"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
