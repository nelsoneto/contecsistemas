import { Body } from '@/components/Body'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full font-alt">
        <Header />
        <Hero />
        <Body />
        {/* <Counter /> */}

        {/* <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl />
        </InputRoot> */}
        <Footer />
      </div>
    </>
  )
}
