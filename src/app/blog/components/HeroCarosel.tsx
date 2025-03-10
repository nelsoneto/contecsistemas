'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

import { Post } from '@/app/blog/interfaces/post'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { CalendarIcon } from 'lucide-react'
import { Key, useEffect, useState } from 'react'

type Props = {
  posts: Post[]
}

export default function HeroCarousel({ posts }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [isTakingLong, setIsTakingLong] = useState(false)

  // Tempo de carregamento dos dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    const longLoadTimer = setTimeout(() => {
      setIsTakingLong(true)
    }, 3000) // Define um tempo limite de 5 seg para exibição da msg de demora

    return () => {
      clearTimeout(timer)
      clearTimeout(longLoadTimer)
    }
  }, [])

  if (!posts || posts.length === 0) {
    return (
      <div className="mt-36 flex h-[500px] items-center justify-center">
        {isLoading ? (
          <div className="flex-row items-center justify-center justify-items-center gap-8 space-y-8">
            <motion.div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '7px solid #1189d0',
                borderTopColor: 'transparent',
                boxShadow:
                  '0 0 10px rgba(54, 215, 183, 0.8), inset 0 0 5px rgba(54, 215, 183, 0.5)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            {isTakingLong && (
              <p className="text-center text-lg font-bold text-slate-300 md:text-3xl">
                O carregamento está demorando mais do que o esperado..😕
              </p>
            )}
          </div>
        ) : (
          <p className="mt-4 text-pretty text-center text-lg font-bold text-slate-300 md:text-3xl">
            Nenhum post disponível no momento 😅
          </p>
        )}

        {/* <ClipLoader
          size={80}
          color={'#1463e0'}
          loading={true}
          cssOverride={{
            borderWidth: '8px',
            boxShadow: '0 0 5px rgba(54, 215, 183, 0.2)',
          }}
        /> */}
      </div>
    )
  }
  return (
    <div className="px-0">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="mb-8 mt-36 rounded-lg">
          {posts.map((post) => (
            <CarouselItem
              className="transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-blue-400"
              key={post.fields.title}
            >
              <Link href={`/blog/news/${post.fields.slug}`}>
                <Card className="relative h-[36rem] w-full rounded-lg border-none shadow-sm shadow-blue-400">
                  <div
                    className={`absolute h-full w-full rounded-lg bg-cover bg-center brightness-50 filter`}
                    style={{
                      backgroundImage: `url(${post.fields.image?.fields.file.url})`,
                    }}
                  ></div>
                  <CardContent className="relative z-10 flex min-h-screen flex-col items-start justify-center gap-y-4">
                    <div className="flex-row gap-2 text-[2px] md:flex md:text-base">
                      {post.fields.tags.map((tag: Key | null | undefined) => (
                        <Badge key={tag} className="overflow-hidden truncate">
                          {typeof tag === 'string'
                            ? tag.charAt(0).toUpperCase() + tag.slice(1)
                            : tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-start text-xl font-bold tracking-tight text-slate-50 md:text-4xl">
                      {post.fields.title}
                    </h2>
                    <p className="text-start text-sm text-slate-300 md:text-base">
                      {post.fields.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs md:text-base">
                      <CalendarIcon className="h-4 w-4 text-slate-300" />
                      <p className="text-slate-300">
                        {new Date(post.sys.createdAt).toLocaleDateString(
                          'pt-BR',
                          {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          },
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
