import { Body } from '@/components/Body'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Contec Sistemas</title>
        <meta name="description" content="Contec Sistemas." />
      </Head>
      <div className="mx-auto w-full font-alt">
        <Header />
        <Hero />
        <Body />
      </div>
    </>
  )
}
