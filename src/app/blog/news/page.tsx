import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { client } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next/types'
import Post from '../interfaces/post'

export const metadata: Metadata = {
  title: 'Novidades',
  description: 'Bem-vindo à página de novidades do blog!',
}

export default async function NewsPage() {
  const response = await client.getEntries<Post>({
    content_type: 'blog',
  })

  const posts: Post[] = response.items.map((item) => ({
    sys: item.sys,
    contentTypeId: item.sys.contentType.sys.id,
    fields: item.fields,
  }))

  return (
    <section className="mt-10 h-screen justify-center px-4 lg:px-60">
      <h1 className="mb-10 text-start text-3xl tracking-tighter md:text-4xl">
        Nossas últimas noticias
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card
            className="overflow-hidden rounded-lg border-none shadow-xl hover:outline hover:outline-offset-2 hover:outline-blue-500"
            key={index}
          >
            <div className="relative h-48 w-full">
              <Link href={`/news${post.fields.slug}`}>
                <Image
                  src={`https:${post.fields.image?.fields.file.url}`}
                  alt={post.fields.title}
                  layout="fill"
                  objectFit="cover"
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
                <Link href={`/news${post.fields.slug}`}>Leia mais</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
