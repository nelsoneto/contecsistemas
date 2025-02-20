/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/client'
import { Document } from '@contentful/rich-text-types'
import { Metadata } from 'next/types'
import CardsCategories from '../../components/CardsCategories'
import CategoriesMenu from '../../components/CategoriesMenu'
import { Post } from '../../interfaces/post'

type Props = {
  params: {
    slug: string
  }
}


export const dynamic = 'auto'
export const fetchCache = 'auto'
export const revalidate = 10

export default async function Categories({ params }: Props) {
  const { slug } = params

  const response = await client.getEntries({
    content_type: 'blog',
    'fields.tags': slug,
  })

  const posts: Post[] = response.items.map((item) => ({
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
      image: item.fields.image
        ? {
          sys: (item.fields.image as any).sys,
          fields: {
            title: (item.fields.image as any).fields.title,
            file: {
              url: (item.fields.image as any).fields.file.url,
            },
          },
        }
        : null,
      imageUrl: item.fields.image
        ? (item.fields.image as any).fields.file.url
        : null,
    },
  }))

  return (
    <section className="mb-8 max-w-full flex flex-col min-h-screen pt-36 text-center xl:px-96mt-36 justify-center pb-20 px-4 md:px-24 lg:px-44 xl:px-64">
      <div className='sm:flex flex-row justify-between '>
        <h1 className="text-primary mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </h1>
        <CategoriesMenu />
      </div>
      <CardsCategories posts={posts} />
    </section>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: 'Todas as Categorias ' + slug,
  }
}
