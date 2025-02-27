import { Body } from '@/components/Body'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { TabsDemo } from './solutions/midas/SettingsTabs/TabsDemo'

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full font-alt">
        <Header />
        <Hero />
        <Body />
        <TabsDemo />
      </div>
    </>
  )
}
