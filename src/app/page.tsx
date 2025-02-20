import { Body } from '@/components/Body'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full font-alt">
        <Header />
        <Hero />
        <Body />
      </div>
    </>
  )
}
