import ConditionalNavbar from '@/components/ConditionalNavbar'
import { Footer } from '@/components/Footer'
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
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        <main className="">
          <ConditionalNavbar />
          {children}
          <Widget />
          <Footer />
        </main>
      </body>
    </html>
  )
}
