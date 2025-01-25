/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@/app/blog/interfaces/post'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Document } from '@contentful/rich-text-types'
import { createClient } from 'contentful'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})

export const dynamic = 'auto'
export const fetchCache = 'auto'
export const revalidate = 10

export default async function NewsPage() {
  const response = await client.getEntries({
    content_type: 'blog',
  })

  const posts: Post[] = response.items.map((item): Post => ({
    sys: {
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      contentTypeId: 'blog',
    },
    fields: {
      tags: item.fields.tags as string[],
      title: item.fields.title as string,
      body: item.fields.body as Document,
      slug: item.fields.slug as string,
      description: item.fields.description as string,
      image: item.fields.image ? {
        sys: (item.fields.image as any).sys,
        fields: {
          title: (item.fields.image as any).fields.title,
          file: {
            url: (item.fields.image as any).fields.file.url,
          },
        },
      } : null,
      imageUrl: item.fields.image ? (item.fields.image as any).fields.file.url : null,
    },
  }))

  return (
    <>
      <Head>
        <title>Nossas últimas noticias</title>
        <meta name="description" content="Confira as últimas notícias do nosso blog." />
        <meta name="keywords" content="blog, notícias, atualizações" />
      </Head>
      <section className="mt-10 h-screen justify-center px-4 lg:px-60">
        <h1 className="mb-10 text-start text-3xl tracking-tighter md:text-4xl">
          Nossas últimas noticias
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post, index: number) => (
            <Card
              className="overflow-hidden rounded-lg border-none shadow-xl hover:outline hover:outline-offset-2 hover:outline-blue-500"
              key={index}
            >
              <div className="relative h-48 w-full">
                <Link href={`/blog/news/${post.fields.slug}`}>
                  <Image
                    src={`https:${post.fields.image?.fields.file.url}`}
                    alt={post.fields.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                  />
                </Link>
              </div>
              <CardHeader>
                <CardTitle>{post.fields.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.fields.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="midas">
                  <Link href={`/blog/news/${post.fields.slug}`}>Leia mais</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}