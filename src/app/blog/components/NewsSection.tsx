/* eslint-disable prettier/prettier */
'use client'
import { NewsSkeleton } from '@/app/blog/components/NewsSkeleton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Post } from '../interfaces/post'

type Props = {
  posts: Post[]
  categories: string[]
}

export default function NewsSection({ posts }: Props) {
  const [isLoading, setIsLoading] = useState(true)

  // Simula o carregamento dos dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Simula um carregamento de 2 segundos
    return () => clearTimeout(timer)
  }, [])

  const limitedPosts = posts.slice(0, 4)
  console.log(limitedPosts)

  return (
    <section className="my-10 bg-gray-900 rounded-md p-8">
      <div className="flex items-center justify-between">
        <Link href={'/blog/news'} className="text-primary text-3xl font-bold">
          Últimas Notícias
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6">
        {isLoading
          ? // Exibe o skeleton enquanto os dados estão carregando
          Array.from({ length: 3 }).map((_, index) => (
            <NewsSkeleton key={index} />
          ))
          : // Exibe o conteúdo real após o carregamento
          limitedPosts.map((post, index) => (
            <div
              key={post.sys.id}
              className={`flex flex-col items-center justify-center gap-x-6 gap-4 pb-10 ${index !== posts.length - 1 ? 'border-b border-gray-200/20' : ''
                } xl:flex-row`}
            >
              <div className="flex flex-col xl:w-3/6">
                {post.fields.image && (
                  <Image
                    src={`https:${post.fields.image.fields.file.url}`}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    alt={post.fields.image.fields.title}
                  />
                )}
              </div>
              <div className="flex flex-col gap-y-4 xl:w-1/2 md:gap-y-6">
                <h4 className="text-primary text-2xl font-bold">
                  {post.fields.title}
                </h4>
                <p className="text-foreground">{post.fields.description}</p>
                {/* created at */}
                <div className="flex items-center gap-x-2">
                  <CalendarIcon size={16} />
                  <p className="text-foreground">
                    {new Date(post.sys.createdAt).toLocaleDateString(
                      'pt-BR',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      },
                    )}
                  </p>
                </div>
                {/* tags */}
                {post.fields.tags &&
                  Array.isArray(post.fields.tags) &&
                  post.fields.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-x-2">
                    {post.fields.tags.map((tag) => (
                      <Badge
                        variant={'outline'}
                        key={tag}
                        className="border-none bg-slate-800 hover:bg-slate-700 text-slate-300"
                      >
                        <Link href={`/blog/categories/${tag}`}>
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Link>
                      </Badge>
                    ))}
                  </div>
                ) : null}
                {/* Botão */}
                <div className="flex flex-wrap gap-x-2">
                  <Button variant='midas' size='midas'>
                    <Link href={`/blog/news/${post.fields.slug}`}>
                      Ler mais
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        <div className='flex justify-center items-center w-full mt-10'>
          <Button variant='midas' size='midas' className='w-full h-16 '>
            <Link href={`/blog/news/`}>Mais notícias</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
