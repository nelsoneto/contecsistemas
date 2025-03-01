'use client'
/* eslint-disable prettier/prettier */

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
        <Button variant="midas" size="midas">
          <BarChartHorizontalIcon />
          Categorias
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-64 w-52 overflow-y-auto bg-slate-900">
        <DropdownMenuLabel className="p-2 text-slate-200">
          Categorias
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-blue-500/60 h-0.5" />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {categories.map((category, index) => (
            <Link key={index} href={`/blog/categories/${category}`}>
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
