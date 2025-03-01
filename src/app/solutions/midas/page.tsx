import Head from 'next/head'
import { PageMidasHeader } from './PageMidasHeader'
import { PageMidasHero } from './PageMidasHero'
import { TabsDemo } from './SettingsTabs/TabsDemo'

export default function PageMidas() {
  return (
    <>
      <Head>
        <title>MIDAS</title>
        <meta name="description" content="Sistema MIDAS" />
      </Head>
      <div className="mx-auto max-h-max w-full text-slate-300">
        <PageMidasHeader />
        <TabsDemo />
        <PageMidasHero />
        {/* <SettingsTabs /> */}
      </div>
    </>
  )
}
