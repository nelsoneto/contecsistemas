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
import { BarChartHorizontalIcon } from 'lucide-react'
import Link from 'next/link'

export default function DropdownCategories({
  categories,
}: {
  categories: string[]
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <BarChartHorizontalIcon />
          Categorias
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 bg-slate-900">
        <DropdownMenuLabel className="p-2 text-slate-200">
          Categorias
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-blue-400/40" />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {categories.map((category, index) => (
            <Link key={index} href={`/categories/${category}`}>
              <DropdownMenuItem className="cursor-pointer p-2 hover:bg-slate-800">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
