/* eslint-disable prettier/prettier */
import { client } from '@/lib/client'
import { Document } from '@contentful/rich-text-types'
import { Post } from '../interfaces/post'
import DropdownCategories from './DropdownCategories'

export default async function CategoriesMenu() {
  const categories = await client.getEntries({
    content_type: 'blog',
  })

  const categoriesArray = categories.items.map((item) => {
    const post: Post = {
      sys: {
        id: item.sys.id,
        createdAt: item.sys.createdAt,
        contentTypeId: 'blog',
      },
      fields: {
        tags: item.fields.tags as string[],
        title: (item.fields.title as string) ?? '',
        body: item.fields.body as Document, // Certifique-se de que isso seja do tipo Document
        slug: item.fields.slug as string,
        description: item.fields.description as string,
        image: item.fields.image
          ? {
            sys: {
              type: 'Asset',
              linkType: 'Asset',
              id: (item.fields.image as { sys: { id: string } })?.sys?.id ?? '',
            },
            fields: {
              title: (item.fields.image as { fields: { title: string } })?.fields?.title as string,
              file: {
                url: (item.fields.image as { fields: { file: { url: string } } }).fields.file.url as string,
              },
            },
          }
          : null,
      }
    }
    return post.fields.tags
  })

  const categoriesFlat = categoriesArray.flat()
  const uniqueCategories = [...Array.from(new Set(categoriesFlat))]

  return (
    <div className="mb-10">
      <DropdownCategories categories={uniqueCategories} />
    </div>
  )
}
