'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Dropdown } from '@/components/Dropdown'
import Image from 'next/image'
import Link from 'next/link'
import contecLogo from '../../public/images/logo.svg'

export function Navbar() {
  const Links = [
    { id: 1, name: 'Inicio', link: '/' },
    { id: 2, name: 'Blog', link: '/' },
    { id: 3, name: 'Suporte', link: '/suport' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed left-0 top-0 z-50 w-full font-alt shadow-md">
      <div className="items-center justify-between bg-slate-900 px-8 py-2 md:flex 2xl:px-64">
        {/* logo section */}
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 text-2xl font-bold"
        >
          <Image src={contecLogo} alt="Contec Sistemas" className="h-8 w-8" />
          <span className="max-w-0 overflow-hidden text-nowrap px-2 text-xl lg:max-w-56">
            <span className="pl-12 text-slate-200 lg:pl-0">
              CONTEC SISTEMAS
            </span>
          </span>
        </Link>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-3 h-7 w-7 cursor-pointer md:hidden"
        >
          {open ? <X /> : <Menu />}
        </div>
        {/* linke items */}
        <ul
          className={`absolute left-0 z-[-1] w-full bg-slate-900 pb-12 pl-5 transition-all duration-500 ease-linear md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${open ? 'top-12' : 'top-[-490px]'}`}
        >
          {Links.map((link) => (
            <li key={link.id} className="my-7 py-2 md:my-0 md:ml-8">
              <a
                href={link.link}
                className="rounded-md border border-transparent px-3 py-2 text-zinc-100 transition-colors hover:bg-slate-800 focus:border-blue-500 focus:outline-none"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="my-6 flex space-y-10 font-semibold md:my-0 md:ml-8">
            <Dropdown />
            {/* <button className="rounded border-2 border-transparent bg-blue-600 px-3 py-1 font-semibold text-zinc-100 duration-500 hover:border-blue-400 md:static md:ml-8">
              Entrar
            </button> */}
          </div>
        </ul>
        {/* button */}
      </div>
    </div>
  )
}
