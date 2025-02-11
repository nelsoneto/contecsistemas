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
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.fields.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="midas" aria-label="Search">
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
            <CommandInput
              placeholder="Pesquisar..."
              value={searchTerm}
              onValueChange={setSearchTerm}
            />
            <CommandList>
              <CommandGroup>
                {filteredPosts.map((post) => (
                  <CommandItem
                    key={post.fields.slug}
                    className="font-semibold text-slate-100"
                    value={post.fields.title}
                  >
                    <Link
                      href={`/blog/news/${post.fields.slug}`}
                      className="block w-full"
                    >
                      <p className="text-sm">{post.fields.title}</p>
                      <p className="text-xs text-slate-400">
                        {post.fields.description}
                      </p>
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
