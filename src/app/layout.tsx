import ConditionalFooter from '@/components/ConditionalFooter'
import ConditionalNavbar from '@/components/ConditionalNavbar'
import { Widget } from '@/components/Widget'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} flex min-h-screen flex-col font-sans`}
      >
        <main className="flex-grow">
          <ConditionalNavbar />
          {children}
          <Widget />
          <ConditionalFooter />
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  )
}
