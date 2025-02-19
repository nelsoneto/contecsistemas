import midasIcon from '@/public/images/midas-icone.png'
import Image from 'next/image'

export function PageMidasHeader() {
  return (
    <section className="flex flex-col items-center">
      {/* Header Section */}
      <header className="flex h-60 w-full items-center justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-800 to-blue-900 pt-16 2xl:h-80">
        <div className="flex items-center gap-4">
          <Image
            src={midasIcon}
            alt="Ícone do Sistema Midas"
            className="h-10 w-10 drop-shadow-md md:h-12 md:w-12"
            quality={80}
            priority
          />
          <h1 className="bg-gradient-to-r from-cyan-300 via-sky-100 to-blue-300 bg-clip-text px-1 font-alt text-4xl text-transparent md:text-6xl">
            MIDAS
          </h1>
        </div>

        {/* <h2 className="hidden text-center font-alt xl:block xl:max-w-2xl xl:text-4xl 2xl:text-5xl">
          A nossa solução mais{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-300 bg-clip-text px-1 text-transparent">
            completa para sua empresa
          </span>
        </h2> */}
      </header>
      {/* Main Content */}
      <div className="relative w-full">
        <div className="relative h-[400px] w-full bg-midas bg-cover bg-center xl:h-screen">
          {/* Se for adicionar a imagem posteriormente:
          <Image
            src={erpImg}
            alt="Interface do Sistema MIDAS"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          /> */}
        </div>

        {/* Feature Banner */}
        <div className="w-full bg-gradient-to-r from-blue-900 via-sky-800 to-blue-900 p-6 md:py-12 xl:px-72">
          <p className="mx-auto max-w-4xl text-pretty font-alt text-2xl leading-relaxed xl:text-4xl">
            Simples de operar, transformando vendas de balcão em um atendimento
            <span className="block font-bold text-cyan-300">
              {' '}
              rápido, prático, eficiente e seguro
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
