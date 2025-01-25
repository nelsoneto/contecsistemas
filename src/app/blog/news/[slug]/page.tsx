import { client } from '@/lib/client'
import { Document } from '@contentful/rich-text-types'
import { Entry, EntrySkeletonType } from 'contentful'
import { CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import RichText from '../../rich-text'

type Props = {
  params: {
    slug: string
  }
}

export const dynamic = 'auto'
export const fetchCache = 'auto'
export const revalidate = 10

export default async function NewsPage({ params }: Props) {
  const { slug } = await params

  const response = await client.getEntries({
    content_type: 'blog',
    'fields.slug': slug,
  })

  const posts = response.items[0] as Entry<EntrySkeletonType>

  if (!posts) {
    return <p>Post não encontrado</p>
  }

  const date = new Date(posts.sys.createdAt)
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
  }).format(date)

  const { title, body, image, description } = posts.fields as unknown as {
    title: string
    body: Document
    image: { fields: { file: { url: string } } }
    description: string
  }

  return (
    <section className="mt-10 flex flex-col gap-y-4 px-4 xl:px-96">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-start">{description}</h2>
      <div className="flex items-center gap-2">
        <CalendarIcon size={18} />
        <p className="text-sm">{formattedDate}</p>
      </div>
      <Image
        src={`https:${image.fields.file.url}`}
        alt={title}
        width={800}
        height={400}
        className="h-96 w-full rounded-lg object-cover"
      />
      <div className="flex w-full justify-center">
        <article className="prose max-w-full text-justify lg:prose-lg prose-headings:text-stone-300 prose-p:text-slate-300">
          <RichText content={body} />
        </article>
      </div>
    </section>
  )
}
