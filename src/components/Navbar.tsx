/* eslint-disable prettier/prettier */
'use client'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { DropdownProdutos } from '@/components/DropdownProdutos'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  const Links = [
    { id: 1, name: 'Inicio', link: '/' },
    { id: 2, name: 'Blog', link: '/blog' },
    { id: 3, name: 'Suporte', link: '/suport' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed left-0 top-0 z-50 w-full font-alt shadow-md">
      <div className="h-20 items-center justify-between bg-slate-900 px-8 py-4 md:flex md:px-24 lg:px-44 xl:px-64">
        {/* logo section */}
        <Link
          href="/"
          className="flex w-14 cursor-pointer items-center gap-1 py-2 pl-4 text-2xl font-bold lg:w-auto"
        >
          <Image
            src="/images/logo.svg"
            alt="Contec Sistemas"
            width={28}
            height={28}
            className="h-auto w-auto object-cover"
          />
          <span className="max-w-0 overflow-hidden text-nowrap px-2 text-lg lg:max-w-64">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap pl-12 text-slate-200 lg:pl-0">
              CONTEC SISTEMAS
            </span>
          </span>
        </Link>

        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-3 h-7 w-7 cursor-pointer py-4 md:hidden"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.1 }}
          >
            {open ? <X /> : <Menu />}
          </motion.div>
        </div>

        {/* link items */}
        <ul
          className={`absolute left-0 w-full justify-items-center bg-slate-900 pb-4 md:static md:z-auto md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pl-0 ${open ? 'top-16' : 'hidden'
            }`}
        >
          {Links.map((link) => (
            <li key={link.id} className="my-7 pt-4 sm:pt-0 md:my-0 md:ml-8">
              <a
                href={link.link}
                className="flex w-full rounded-md border-2 border-transparent px-8 py-3 text-zinc-100 transition-colors hover:bg-slate-800 focus:border-blue-500 focus:outline-none"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="my-9 flex space-y-10 font-semibold md:my-0 md:ml-8">
            <DropdownProdutos />
          </div>
        </ul>
      </div>
    </div>
  )
}
