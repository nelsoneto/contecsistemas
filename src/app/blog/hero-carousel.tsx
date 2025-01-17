'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { ClipLoader } from 'react-spinners'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Post from './interfaces/post'

type Props = {
  posts: Post[]
}

export default function HeroCarousel({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <ClipLoader size={50} color={'#123abc'} loading={true} />
      </div>
    )
  }
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="rounded-lg">
          {posts.map((post) => (
            <CarouselItem
              className="transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-400"
              key={post.fields.title}
            >
              <Link href={`/news${post.fields.slug}`}>
                <Card className="relative h-[36rem] w-full rounded-lg border-none shadow-xl shadow-blue-400">
                  <div
                    className={`absolute h-full w-full rounded-lg bg-cover bg-center brightness-50 filter`}
                    style={{
                      backgroundImage: `url(${post.fields.image?.fields.file.url})`,
                    }}
                  ></div>
                  <CardContent className="relative z-10 flex min-h-screen flex-col items-start justify-center gap-y-4">
                    <div className="flex gap-2">
                      {post.fields.tags.map((tag) => (
                        <Badge key={tag} className="">
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-start text-4xl font-bold tracking-tight text-slate-50">
                      {post.fields.title}
                    </h2>
                    <p className="text-start text-slate-50">
                      {post.fields.description}
                    </p>
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
