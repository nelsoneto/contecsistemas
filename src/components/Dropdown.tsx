'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export function Dropdown() {
  return (
    <Popover className="relative">
      <PopoverButton className="rounded-md border border-transparent px-3 py-2 text-zinc-100 hover:border-blue-400 focus:border-blue-400 focus:outline-none">
        Produtos
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="font-baijamjuree-regular z-50 mt-2 flex w-full flex-col space-y-4 rounded-md bg-slate-900/95 p-4"
      >
        <div className="flex w-full flex-col gap-2 space-y-4 p-2">
          <a
            className="rounded-md p-2 hover:bg-slate-700"
            href="/solutions/midas"
          >
            MIDAS
          </a>
          <a className="rounded-md p-2 hover:bg-slate-700" href="/">
            PDVMIDAS
          </a>
          <a className="rounded-md p-2 hover:bg-slate-700" href="/">
            Frigorifico
          </a>
          <a className="rounded-md p-2 hover:bg-slate-700" href="/">
            Minério
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
