'use client'
import midasIcon from '@/public/images/midas-icone.png'
import midasComprovante from '@/public/images/midas_comprovante.png'
import midasTelaPrincipal from '@/public/images/midas_tela_principal.png'
import midasTelaVedas from '@/public/images/midas_tela_vendas.png'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

export function PageMidasHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const images = [
    midasTelaPrincipal.src,
    midasTelaVedas.src,
    midasComprovante.src,
  ]

  return (
    <section className="mx-4 flex flex-col items-center rounded-md bg-slate-900">
      {/* Header Section */}
      <header className="pb-38 mb-10 flex h-auto w-full flex-col items-center justify-center gap-4 pt-44">
        <div className="flex items-center gap-4">
          <Image
            src={midasIcon}
            alt="Ícone do Sistema Midas"
            className="h-10 w-10 drop-shadow-md md:h-12 md:w-12"
            quality={80}
            priority
          />
          <h1 className="bg-gradient-to-r from-cyan-500 via-sky-300 to-blue-500 bg-clip-text px-1 font-alt text-4xl text-transparent md:text-6xl">
            MIDAS
          </h1>
        </div>
        {/* Feature Banner */}
        <div className="mb-10 w-full p-6 md:py-12 xl:px-72">
          <p className="text-center font-alt text-3xl leading-relaxed text-slate-300 xl:text-4xl">
            Simples de operar, transformando vendas de balcão em um atendimento
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-300 to-blue-500 bg-clip-text font-bold text-transparent">
              rápido, prático, eficiente e seguro
            </span>
          </p>
        </div>
      </header>
      {/* Main Content */}
      <div className="relative w-full">
        {/* <div className="flex-row justify-items-center gap-4 space-y-4 p-10 md:flex md:items-center md:justify-center">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <Image
                src={src}
                alt={`Interface do Sistema MIDAS ${index + 1}`}
                width={400}
                height={400}
                className="border-spacing-8 cursor-pointer rounded-md object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                onClick={() => {
                  setPhotoIndex(index)
                  setIsOpen(true)
                }}
              />
            </div>
          ))}
        </div> */}

        {/* Feature Banner */}
        {/* <div className="mb-10 w-full p-6 md:py-12 xl:px-72">
          <p className="text-center font-alt text-3xl leading-relaxed text-slate-300 xl:text-4xl">
            Simples de operar, transformando vendas de balcão em um atendimento
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-300 to-blue-500 bg-clip-text font-bold text-transparent">
              rápido, prático, eficiente e seguro
            </span>
          </p>
        </div> */}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  )
}
