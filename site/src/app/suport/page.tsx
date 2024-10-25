import Image from 'next/image'
import Link from 'next/link'
import whatsAppImg from '../../../public/images/WhatsApp.png'
import { DownloadContents } from './DownloadContents'
import { PagePerguntas } from './PagePerguntas'

export default function SuportPage() {
  return (
    <div className="mx-auto max-h-max w-full text-slate-300">
      <div className="mt-12 flex h-full w-full items-center justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-700 to-blue-900 py-4">
        <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text px-1 font-alt text-2xl text-transparent xl:text-4xl">
          Suporte técnico
        </h1>
        <Link
          href="https://wa.me/556999705453"
          rel="noopener noreferrer"
          target="_blank"
          className="hidden items-center justify-center gap-2 text-center font-alt text-4xl md:flex"
        >
          <Image
            src={whatsAppImg}
            alt="WhatsApp"
            className="w-10 object-cover"
          />
          (69)99970-5453
        </Link>
        <a href="" className="hidden xl:flex">
          (69)3535-6826
        </a>
      </div>
      <DownloadContents />
      <PagePerguntas />
    </div>
  )
}
