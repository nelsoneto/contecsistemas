'use client'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Post } from '../interfaces/post'

type Props = {
  posts: Post[]
}

export default function Searcher({ posts }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="midas">
            <Search size={20} />
            Pesquisar
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="bg-slate-900 p-0 text-slate-200"
          side="bottom"
          align="center"
        >
          <Command className="bg-slate-900 text-slate-200">
            <CommandInput placeholder="Pesquisar..." />
            <CommandList>
              <CommandGroup>
                {posts.map((post, index) => (
                  <CommandItem
                    key={index}
                    className="font-semibold text-slate-100"
                    value={post.fields.title}
                  >
                    <Link href={`/blog/news/${post.fields.slug}`}>
                      {post.fields.title}
                      <div className="flex flex-col">
                        <div className="flex flex-col">
                          <p className="text-xs">{post.fields.title}</p>
                          <p className="text-sm">{post.fields.description}</p>
                        </div>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
