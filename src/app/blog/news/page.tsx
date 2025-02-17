/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@/app/blog/interfaces/post'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Document } from '@contentful/rich-text-types'
import { createClient } from 'contentful'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CategoriesMenu from '../components/CategoriesMenu'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})

export const dynamic = 'auto'
export const fetchCache = 'auto'
export const revalidate = 10

interface NewsPageProps {
  searchParams: {
    page?: string
  }
}


export default async function NewsPage({ searchParams }: NewsPageProps) {
  const currentPage = Number(searchParams.page) || 1 // Pagina atual, padrão 1
  const postsPerPage = 6 // Number of posts per page

  // buscar todos os posts do contentful
  let response;
  try {
    response = await client.getEntries({
      content_type: 'blog',
    });
  } catch (error) {
    console.error('Failed to fetch posts from Contentful:', error);
    return <div className='flex flex-col w-full items-center justify-center'>Nenhuma noticia encontrada.</div>;
  }

  const allPosts: Post[] = response.items.map((item): Post => ({
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
      image: item.fields.image ? {
        sys: (item.fields.image as any).sys,
        fields: {
          title: (item.fields.image as any).fields.title,
          file: {
            url: (item.fields.image as any).fields.file.url,
          },
        },
      } : null,
      imageUrl: item.fields.image ? (item.fields.image as any).fields.file.url : null,
    },
  }))

  // Calcular os posts da página atual
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  return (
    <>
      <Head>
        <title>Nossas últimas noticias</title>
        <meta name="description" content="Confira as últimas notícias do nosso blog." />
        <meta name="keywords" content="blog, notícias, atualizações" />
      </Head>
      <section className="mt-36 min-h-screen justify-center  px-4 md:px-24 lg:px-44 xl:px-64 pb-44">
        <div className="sm:flex flex-row justify-between">
          <h1 className="text-primary mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Todas as Noticias
          </h1>
          <CategoriesMenu />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post: Post, index: number) => (
            <Card
              className="bg-slate-200 overflow-hidden rounded-lg border-none shadow-xl hover:outline hover:outline-offset-2 hover:outline-blue-500"
              key={index}
            >
              <div className="relative h-48 w-full">
                <Link href={`/blog/news/${post.fields.slug}`}>
                  <Image
                    src={post.fields.image ? `https:${post.fields.image.fields.file.url}` : '/fallback-image.jpg'}
                    alt={post.fields.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                  />
                </Link>
              </div>
              <CardHeader>
                <CardTitle>{post.fields.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-700">{post.fields.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="midas" aria-label={`Leia mais sobre ${post.fields.title}`}>
                  <Link href={`/blog/news/${post.fields.slug}`}>Leia mais</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Paginação */}
        <Pagination className="mt-10">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`/blog/news?page=${currentPage - 1}`} />
              </PaginationItem>
            )}
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink className='bg-slate-800 border-none hover:bg-slate-700 hover:text-slate-200 text-xs' href={`/blog/news?page=${i + 1}`} isActive={currentPage === i + 1}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext href={`/blog/news?page=${currentPage + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
}