'use client'
import midasIcon from '@/public/images/midas-icone.png'
import midasComprovante from '@/public/images/midas_comprovante.png'
import midasTelaPrincipal from '@/public/images/midas_tela_principal.png'
import midasTelaVedas from '@/public/images/midas_tela_vendas.png'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { Link as ScrollLink } from 'react-scroll'

export function PageMidasHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const images = [
    midasTelaPrincipal.src,
    midasTelaVedas.src,
    midasComprovante.src,
  ]

  return (
    <section className="mx-4 mb-10 flex h-auto flex-col items-center rounded-md bg-slate-900 xl:h-screen">
      {/* Header Section */}
      <header className="flex h-auto w-full flex-col items-center justify-center gap-8 pt-40 2xl:pt-48">
        {/* Feature Banner */}
        <div className="flex items-center justify-center rounded-full border border-neutral-400 border-b-white bg-gray-900 px-2">
          <h1 className="bg-gradient-to-r from-cyan-500 via-sky-300 to-blue-500 bg-clip-text px-1 font-alt text-transparent">
            MIDAS
          </h1>
          <p className="flex items-center justify-center">2.22 Disponível 🎉</p>
        </div>
        <div className="mb-10 w-full space-y-8 px-4 md:px-14 lg:px-48 xl:px-60">
          <h1 className="text-center font-alt text-3xl leading-relaxed text-slate-100 sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
            Potencialize sua eficiência operacional e maximize a produtividade
            com o sistema MIDAS.
          </h1>
          <p className="px-4 text-center font-sans text-lg text-gray-400 md:px-9 lg:px-16 xl:px-36 xl:text-xl">
            Simples de operar, transformando vendas de balcão em um atendimento
            rápido, prático, eficiente e seguro
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center">
            <div className="flex-row gap-4 space-y-4 sm:flex sm:space-y-0">
              <Link
                href="download/midas/install/midas_222_firebird5_setup.exe"
                download="midas_222_firebird5_setup.exe"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-4 px-5 py-3 font-medium text-sky-500 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-sky-600"
              >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-500 via-blue-600 to-teal-600"></span>
                <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-teal-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
                <span className="relative flex gap-2 text-white">
                  Teste agora
                  <Image
                    src={midasIcon}
                    alt="Ícone do Sistema Midas"
                    className="h-[22px] w-[22px] drop-shadow-md"
                    quality={80}
                    priority
                  />
                </span>
              </Link>
              <Link
                href="https://wa.me/message/EPNTUZEZZV3UC1"
                className="flex items-center justify-center overflow-hidden rounded-md bg-gray-900 px-8 py-3 font-sans transition delay-150 hover:bg-gray-800"
              >
                <span className="font-bold">Fale conosco</span>
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-center text-center">
            <ScrollLink
              to="modal-midas" // ID da seção para onde você quer rolar
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer"
            >
              <ChevronDown
                className="h-12 w-12 rotate-180 animate-bounce rounded-full p-2 text-sky-500"
                strokeWidth={3}
              />
            </ScrollLink>
          </div>
        </div>
      </header>

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
