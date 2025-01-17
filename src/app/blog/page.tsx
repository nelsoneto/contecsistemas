'use client'
import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import HeroCarousel from './hero-carousel'
import Post from './interfaces/post'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await client.getEntries<Post>({
        content_type: 'blog',
      })

      const postsData: Post[] = await Promise.all(
        response.items.map(async (item): Promise<Post> => {
          let imageUrl: string | null = null
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
            contentTypeId: 'blog',
            sys: {
              ...item.sys,
            },
            fields: {
              ...item.fields,
              imageUrl,
            },
          }
        }),
      )

      setPosts(postsData)
    }

    fetchData()
  }, [])

  return (
    <section className="px-4 lg:px-60">
      <HeroCarousel posts={posts} />
    </section>
    // <div className="mx-auto flex max-h-max w-full justify-center gap-4 px-60">
    //   {posts.map((post) => (
    //     <div
    //       key={post.sys.id}
    //       className="flex w-full flex-col items-center gap-4 py-4"
    //     >
    //       <h1 className="text-4xl">{post.fields.title}</h1>
    //       {documentToReactComponents(post.fields.body, renderOptions)}
    //       {post.fields.imageUrl && (
    //         <Image
    //           src={`https:${post.fields.imageUrl}`}
    //           alt={post.fields.title}
    //           width={500}
    //           height={300}
    //         />
    //       )}
    //     </div>
    //   ))}
    // </div>
  )
}

// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { Block, BLOCKS, Inline } from '@contentful/rich-text-types'
// import { createClient } from 'contentful'
// import Image from 'next/image'
// import React from 'react'
// import Post from './interfaces/post'

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID as string,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
// })

// export default async function BlogPage() {
//   const response = await client.getEntries<Post>({
//     content_type: 'blog',
//   })

//   const posts: Post[] = await Promise.all(
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     response.items.map(async (item: any): Promise<Post> => {
//       let imageUrl: string | null = null
//       if (item.fields.image) {
//         try {
//           const asset = await client.getAsset(item.fields.image.sys.id)
//           if (asset.fields.file) {
//             imageUrl = asset.fields.file.url
//           }
//         } catch (error) {
//           console.error(
//             `Erro ao buscar o ativo ${item.fields.image.sys.id}:`,
//             error,
//           )
//         }
//       }
//       return {
//         contentTypeId: 'blog',
//         sys: {
//           ...item.sys,
//           contentTypeId: 'blog',
//         },
//         fields: {
//           ...item.fields,
//           imageUrl,
//         },
//       }
//     }),
//   )

//   return (
//     <div className="mt-24 flex h-screen justify-center gap-4 px-28">
//       {posts.map((post) => (
//         <div
//           key={post.sys.id}
//           className="flex w-full flex-col items-center gap-4 py-4"
//         >
//           <h1 className="text-4xl">{post.fields.title}</h1>
//           {documentToReactComponents(post.fields.body, {
//             renderNode: {
//               [BLOCKS.PARAGRAPH]: (_node, children) => <p>{children}</p>,
//               [BLOCKS.HEADING_1]: (_node, children) => (
//                 <h1 className="text-7xl">{children}</h1>
//               ),
//               [BLOCKS.HEADING_2]: (_node, children) => (
//                 <h2 className="text-6xl">{children}</h2>
//               ),
//               [BLOCKS.HEADING_3]: (_node, children) => (
//                 <h3 className="text-5xl">{children}</h3>
//               ),
//               [BLOCKS.HEADING_4]: (_node, children: React.ReactNode) => (
//                 <h4 className="text-4xl">{children}</h4>
//               ),
//               [BLOCKS.HEADING_5]: (_node, children) => (
//                 <h5 className="text-3xl">{children}</h5>
//               ),
//               [BLOCKS.HEADING_6]: (_node, children) => (
//                 <h6 className="text-xl">{children}</h6>
//               ),
//               [BLOCKS.UL_LIST]: (_node, children) => (
//                 <ul className="list-disc pl-5">{children}</ul>
//               ),
//               [BLOCKS.OL_LIST]: (_node, children) => (
//                 <ol className="list-decimal pl-5">{children}</ol>
//               ),
//               [BLOCKS.LIST_ITEM]: (_node, children) => (
//                 <li className="mb-2">{children}</li>
//               ),
//               [BLOCKS.QUOTE]: (_node, children) => (
//                 <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-500">
//                   {children}
//                 </blockquote>
//               ),
//               [BLOCKS.TABLE]: (
//                 _node: Block | Inline,
//                 children: React.ReactNode,
//               ) => {
//                 return (
//                   <table className="min-w-full divide-y divide-gray-200">
//                     {children}
//                   </table>
//                 )
//               },
//               [BLOCKS.TABLE_ROW]: (
//                 _node: Block | Inline,
//                 children: React.ReactNode,
//               ) => {
//                 return <tr className="bg-white">{children}</tr>
//               },
//               [BLOCKS.TABLE_HEADER_CELL]: (
//                 _node: Block | Inline,
//                 children: React.ReactNode,
//               ): JSX.Element => {
//                 return (
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
//                     {children}
//                   </th>
//                 )
//               },
//               [BLOCKS.TABLE_CELL]: (
//                 _node: Block | Inline,
//                 children: React.ReactNode,
//               ) => {
//                 return (
//                   <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
//                     {children}
//                   </td>
//                 )
//               },

//               [BLOCKS.EMBEDDED_ASSET]: (node) => {
//                 const { file, title } = node.data.target.fields
//                 const imageUrl = file.url
//                 return (
//                   <Image
//                     src={`https:${imageUrl}`}
//                     alt={title}
//                     width={500}
//                     height={300}
//                   />
//                 )
//               },
//             },
//           })}
//           {post.fields.imageUrl && (
//             <Image
//               src={`https:${post.fields.imageUrl}`}
//               alt={post.fields.title}
//               width={500}
//               height={300}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }
