import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../interfaces/post'

type Props = {
  posts: Post[]
}

export default function CardsCategories({ posts }: Props) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card
          key={index}
          className="overflow-hidden rounded-lg border-none bg-gray-100 shadow-xl hover:outline hover:outline-offset-2 hover:outline-blue-500"
        >
          <div className="relative h-48 w-full">
            <Link href={`/blog/categories/${post.fields.slug || ''}`}>
              {post.fields.image && (
                <Image
                  src={`https:${post.fields.image.fields.file.url}`}
                  alt={post.fields.image.fields.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              )}
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
              <Link href={`/blog/news/${post.fields.slug || ''}`}>
                Ler mais
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
