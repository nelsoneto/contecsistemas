import Image from 'next/image'
import Link from 'next/link'
import whatsImg from '../../public/images/whatsapp.svg'
import { CloseButton } from './CloseButton'

const contactTypes = {
  WhatsSuport: {
    title: 'Suporte',
    image: {
      source: whatsImg,
      alt: 'WhatsApp Suporte',
    },
    link: 'https://wa.me/556999705453',
  },
  WhatsComercial: {
    title: 'Comercial',
    image: {
      source: whatsImg,
      alt: 'WhatsApp Comercial',
    },
    link: 'http://wa.me/556935356826',
  },
}

export function WidgetForm() {
  return (
    <div className="relative mb-4 flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-zinc-900 p-4 shadow-lg md:w-auto">
      <header className="flex w-full justify-center gap-2">
        <span className="text-xl leading-6 md:text-base">
          Fale com a gente 😀
        </span>
        <CloseButton />
      </header>

      <div className="flex w-full gap-2 py-8">
        {Object.entries(contactTypes).map(([key, value]) => {
          return (
            <Link
              className="flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-800 py-8 hover:border-blue-400 focus:border-blue-400"
              key={key}
              href={value.link}
            >
              <Image
                className="h-8 w-8 object-cover"
                src={value.image.source}
                alt={value.image.alt}
              />
              <span>{value.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
