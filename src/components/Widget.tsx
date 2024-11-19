'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { MessageCircleMore } from 'lucide-react'
import { WidgetForm } from './WidgetForm'

export function Widget() {
  return (
    <Popover className="fixed bottom-4 right-4 z-50 flex flex-col items-end md:bottom-8 md:right-8">
      <PopoverPanel>
        <WidgetForm />
      </PopoverPanel>

      <PopoverButton className="group flex h-12 items-center rounded-full bg-gradient-to-r from-cyan-600 via-emerald-600 to-cyan-600 px-3">
        <MessageCircleMore className="h-6 w-6" />
        <span className="duration- max-w-0 overflow-hidden transition-all ease-linear group-hover:max-w-xs">
          <span className="pl-2"></span>
          Contato
        </span>
      </PopoverButton>
    </Popover>
  )
}
