import { Post } from '@/app/blog/interfaces/post'
import { client } from '@/lib/client'
import { CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import RichText from '../../components/RichText'

type Props = {
  params: {
    slug: string
  }
  // searchParams: {
  //   page?: number
  // }
}

export const dynamic = 'auto'
export const revalidate = 10

export default async function NewPage({ params }: Props) {
  const { slug } = params

  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug,
    })

    const post = response.items[0] as unknown as Post

    // Check if post exists and is valid
    if (!post) {
      return notFound()
    }

    const date = new Date(post.sys.createdAt)
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
    }).format(date)

    const { title, description, body, image } = post.fields

    return (
      <section className="flex flex-col items-center justify-center">
        <div className="mb-8 max-w-full pt-36 text-center xl:px-96 xl:text-start">
          <h1 className="mb-4 text-3xl font-bold xl:text-4xl">{title}</h1>
          <h2 className="mb-8 flex items-center justify-center gap-2 text-nowrap text-sm lg:text-base xl:justify-start">
            <CalendarIcon size={16} />
            {formattedDate}
          </h2>
          <div className="mb-10 flex flex-col items-center justify-center px-4 lg:px-0">
            <Image
              src={`https:${image?.fields.file.url}`}
              alt={`${image?.fields.title}`}
              width={900}
              height={400}
              className="rounded-md"
            />
            <p className="text-center text-sm">{description}</p>
          </div>
        </div>

        <article className="prose mb-10 px-4 text-justify prose-headings:text-slate-200 prose-p:text-slate-300 prose-tr:text-blue-400 lg:px-0">
          <RichText content={body} />
        </article>
      </section>
    )
  } catch (error) {
    console.error('Error fetching post: ', error)
    return notFound() // or you could return an error message
  }
}
