/* eslint-disable prettier/prettier */
import HamburgerMenu from '@/app/blog/components/HamburgerMenu'
import { client } from '@/lib/client'
import { Document } from '@contentful/rich-text-types'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../interfaces/post'
import SearcherAlt from './SearcherAlt'

export default async function NavbarBlog() {

  const response = await client.getEntries({
    content_type: 'blog',
  })

  const posts: Post[] = response.items.map((item) => {
    return {
      sys: {
        id: item.sys.id,
        createdAt: item.sys.createdAt,
        contentTypeId: 'blog',
      },
      fields: {
        tags: item.fields.tags as string[],
        title: (item.fields.title as string) ?? '',
        body: item.fields.body as Document,
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
      },
    }
  })

  return (
    <nav className="fixed left-0 top-0 z-50 w-full font-alt shadow-md">
      <div className="h-20 max-w-full flex items-center md:justify-between justify-around bg-slate-900 px-4 md:px-24 lg:px-44 xl:px-64">
        <Link
          href="/blog"
          className="flex pl-4 py-2 w-14 lg:w-auto cursor-pointer items-center gap-1 text-2xl font-bold"
        >
          <Image
            src="/images/logo.svg"
            alt="Contec Sistemas"
            width={32}
            height={32}
          />
          <div className="max-w-0 text-nowrap px-2 overflow-hidden py-6 text-lg lg:max-w-64">
            <h1 className=" text-slate-200 text-ellipsis overflow-hidden whitespace-nowrap">
              CONTEC SISTEMAS <span className="text-blue-500">|</span>{' '}
              <span className="font-alt">BLOG</span>
            </h1>
          </div>
        </Link>
        <div className="flex-1 flex justify-center">
          <SearcherAlt posts={posts} />
        </div>
        <div className="flex items-center">
          <HamburgerMenu />
        </div>
      </div>
    </nav >
  )
}