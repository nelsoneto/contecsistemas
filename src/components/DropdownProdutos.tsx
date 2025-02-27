'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

const categories = [
  { id: 1, name: 'MIDAS', href: '/solutions/midas' },
  { id: 2, name: 'PDVMIDAS', href: '/' },
  { id: 3, name: 'Frigorifico', href: '/' },
  { id: 4, name: 'Minério', href: '/' },
  { id: 5, name: 'Força de Vendas', href: '/' },
]

export function DropdownProdutos() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Produtos</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 bg-slate-900">
        <DropdownMenuLabel className="p-2 font-alt text-base text-slate-200">
          Produtos
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-blue-400/40" />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {categories.map((category, id) => (
            <Link key={id} href={category.href}>
              <DropdownMenuItem className="cursor-pointer p-2 text-base hover:bg-slate-800">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
