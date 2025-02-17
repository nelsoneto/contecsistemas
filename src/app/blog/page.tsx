/* eslint-disable prettier/prettier */
'use client'
import { Post } from '@/app/blog/interfaces/post'
import { Document } from '@contentful/rich-text-types'
import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import HeroCarousel from './components/HeroCarosel'
import NewsSection from './components/NewsSection'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [uniqueCategorias, setUniqueCategorias] = useState<string[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type: 'blog',
        })

        const postsData: Post[] = await Promise.all(
          response.items.map(async (item): Promise<Post> => {
            let imageUrl: string | undefined
            if (item.fields.image) {
              try {
                const asset = await client.getAsset(
                  (item.fields.image as { sys: { id: string } }).sys.id,
                )
                if (asset.fields.file) {
                  imageUrl = asset.fields.file.url
                }
              } catch (error) {
                console.error(
                  `Erro ao buscar o ativo ${(item.fields.image as { sys: { id: string } }).sys.id}:`,
                  error,
                )
              }
            }
            return {
              sys: {
                ...item.sys,
                contentTypeId: 'blog',
              },
              fields: {
                tags: Array.isArray(item.fields.tags)
                  ? (item.fields.tags.filter(
                    (tag) => typeof tag === 'string',
                  ) as string[])
                  : [],
                title:
                  typeof item.fields.title === 'string' ? item.fields.title : '',
                body: item.fields.body as Document,
                slug:
                  typeof item.fields.slug === 'string' ? item.fields.slug : '',
                description:
                  typeof item.fields.description === 'string'
                    ? item.fields.description
                    : '',
                image: item.fields.image as {
                  sys: { type: string; linkType: string; id: string }
                  fields: { title: string; file: { url: string } }
                } | null,
                imageUrl,
              },
            }
          }),
        )

        setPosts(postsData)

        // Fetch additional posts for categories
        const responseTwo = await client.getEntries({
          content_type: "blog",
          limit: 3,
          skip: 3,
        })

        const postsTwo: Post[] = await Promise.all(
          responseTwo.items.map(async (item): Promise<Post> => {
            let imageUrl: string | undefined
            if (item.fields.image) {
              try {
                const asset = await client.getAsset(
                  (item.fields.image as { sys: { id: string } }).sys.id,
                )
                if (asset.fields.file) {
                  imageUrl = asset.fields.file.url
                }
              } catch (error) {
                console.error(
                  `Erro ao buscar o ativo ${(item.fields.image as { sys: { id: string } }).sys.id}:`,
                  error,
                )
              }
            }
            return {
              sys: {
                ...item.sys,
                contentTypeId: 'blog',
              },
              fields: {
                tags: Array.isArray(item.fields.tags)
                  ? (item.fields.tags.filter(
                    (tag) => typeof tag === 'string',
                  ) as string[])
                  : [],
                title:
                  typeof item.fields.title === 'string' ? item.fields.title : '',
                body: item.fields.body as Document,
                slug:
                  typeof item.fields.slug === 'string' ? item.fields.slug : '',
                description:
                  typeof item.fields.description === 'string'
                    ? item.fields.description
                    : '',
                image: item.fields.image as {
                  sys: { type: string; linkType: string; id: string }
                  fields: { title: string; file: { url: string } }
                } | null,
                imageUrl,
              },
            }
          }),
        )
        const categorias = postsTwo.map((post) => post.fields.tags).flat()
        const uniqueCategorias = [...new Set(categorias)] as string[]
        setUniqueCategorias(uniqueCategorias)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className=" px-4 md:px-24 lg:px-44 xl:px-64">
      <HeroCarousel posts={posts} />
      <NewsSection posts={posts} categories={uniqueCategorias} />
    </section>
  )
}