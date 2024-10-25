import { PopoverButton } from '@headlessui/react'
import { X } from 'lucide-react'

export function CloseButton() {
  return (
    <PopoverButton
      className="absolute right-3 top-5 hover:text-zinc-100"
      title="fechar forumlário"
    >
      <X className="h-4 w-4" />
    </PopoverButton>
  )
}
