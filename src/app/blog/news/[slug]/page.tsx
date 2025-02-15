/* eslint-disable prettier/prettier */
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
        <div className="mb-8 max-w-full pt-36 text-pretty md:px-24 lg:px-44 xl:px-96">
          <h1 className="mb-4 text-3xl font-bold xl:text-4xl">{title}</h1>
          <h2 className="mb-4 text-pretty text-2xl">{description}</h2>
          <h3 className="mb-4 flex items-center justify-center gap-2 text-nowrap text-justify text-sm lg:text-base">
            <CalendarIcon size={16} />
            {formattedDate}
          </h3>
          <div className="flex flex-col items-center justify-center px-4 lg:px-0">
            <Image
              src={`https:${image?.fields.file.url}`}
              alt={`${image?.fields.title}`}
              width={600}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>

        <article className="3xl:px-[580px] prose-xl mb-20 px-4 text-justify prose-headings:text-slate-200 prose-p:text-slate-300 prose-tr:text-blue-400 md:px-24 lg:px-44 xl:px-[400px]">
          <RichText content={body} />
        </article>
      </section>
    )
  } catch (error) {
    console.error('Error fetching post: ', error)
    return notFound() // or you could return an error message
  }
}
