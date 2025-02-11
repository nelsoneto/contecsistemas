'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { ClipLoader } from 'react-spinners'

import { Post } from '@/app/blog/interfaces/post'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CalendarIcon } from 'lucide-react'
import { Key } from 'react'

type Props = {
  posts: Post[]
}

export default function HeroCarousel({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <div className="mt-40 flex h-64 items-center justify-center">
        <ClipLoader size={60} color={'#123abc'} loading={true} />
      </div>
    )
  }
  return (
    <div className="px-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="mb-16 mt-36 rounded-lg">
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
                    <div className="flex gap-2">
                      {post.fields.tags.map((tag: Key | null | undefined) => (
                        <Badge key={tag} className="">
                          {typeof tag === 'string'
                            ? tag.charAt(0).toUpperCase() + tag.slice(1)
                            : tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-start text-4xl font-bold tracking-tight text-slate-50">
                      {post.fields.title}
                    </h2>
                    <p className="text-start text-slate-300">
                      {post.fields.description}
                    </p>
                    <div className="flex items-center gap-2">
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
