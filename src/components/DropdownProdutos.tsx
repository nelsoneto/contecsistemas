'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Button } from './ui/button'

const categories = [
  { id: 1, name: 'MIDAS', href: '/solutions/midas' },
  { id: 2, name: 'PDVMIDAS', href: '/' },
  { id: 3, name: 'Frigorifico', href: '/' },
  { id: 4, name: 'Minério', href: '/' },
]

export function DropdownProdutos() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="midas">Produtos</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 justify-items-center rounded-sm border-2 border-blue-500 bg-slate-900">
        <DropdownMenuLabel className="flex w-full items-center justify-center bg-slate-700 py-2">
          Produtos
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {categories.map((category, id) => (
            <a key={id} href={category.href}>
              <DropdownMenuItem className="cursor-pointer p-2">
                {category.name}
              </DropdownMenuItem>
            </a>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
