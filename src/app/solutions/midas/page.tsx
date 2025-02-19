import Head from 'next/head'
import { PageMidasHeader } from './PageMidasHeader'
import { PageMidasHero } from './PageMidasHero'
import { SettingsTabs } from './SettingsTabs'

export default function PageMidas() {
  return (
    <>
      <Head>
        <title>MIDAS</title>
        <meta name="description" content="Sistema MIDAS" />
      </Head>
      <div className="mx-auto max-h-max w-full text-slate-300">
        <PageMidasHeader />
        <PageMidasHero />
        <SettingsTabs />
      </div>
    </>
  )
}
