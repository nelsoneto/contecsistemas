import { Document } from '@contentful/rich-text-types'

export interface Post {
  sys: {
    id: string
    createdAt: string
    contentTypeId: 'blog'
  }
  fields: {
    tags: string[]
    title: string
    body: Document
    slug: string
    description: string
    image: {
      sys: {
        type: string
        linkType: string
        id: string
      }
      fields: {
        title: string
        file: {
          url: string
        }
      }
    } | null
    imageUrl?: string
  }
}
