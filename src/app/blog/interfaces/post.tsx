import { Document } from '@contentful/rich-text-types'
import { EntrySkeletonType } from 'contentful'

interface Post extends EntrySkeletonType {
  sys: {
    id: string
    createdAt: string
  }
  contentTypeId: string
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
    imageUrl?: string | null
  }
}
export default Post
