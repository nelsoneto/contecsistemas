import {
  BrickWall,
  Factory,
  Handshake,
  Headset,
  Package,
  RefreshCcw,
  Shirt,
  ShoppingCart,
  Wrench,
} from 'lucide-react'
import Link from 'next/link'

export function Body() {
  return (
    <div className="h-auto">
      <div className="h-auto bg-slate-900 text-zinc-300">
        <div className="flex h-full w-full flex-col items-center space-y-2 bg-pattern bg-center bg-no-repeat px-4 py-8 xl:px-60 xl:py-10">
          <div className="flex flex-col gap-10 text-center font-alt md:px-10">
            <h1 className="text-2xl md:text-5xl">
              Conheça nosso software e as soluções que oferecemos em diversos
              segmentos:
            </h1>
          </div>

          <div className="font-baijamjuree-bold grid justify-center gap-8 px-2 py-14 text-center sm:grid-cols-2 md:text-lg xl:grid-cols-3">
            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <Link
                href="/solutions/midas"
                className="flex flex-col items-center justify-center gap-6"
              >
                CONFECÇÕES
                <Shirt className="h-8 w-8 md:h-16 md:w-16" />
              </Link>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <Link
                href="/solutions/midas"
                className="flex flex-col items-center justify-center gap-6"
              >
                SUPERMERCADOS
                <ShoppingCart className="h-8 w-8 md:h-16 md:w-16" />
              </Link>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <Link
                href="/solutions/midas"
                className="flex flex-col items-center justify-center gap-6"
              >
                ATACADO E VAREJO
                <Package className="h-8 w-8 md:h-16 md:w-16" />
              </Link>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <Link
                href="/solutions/midas"
                className="flex flex-col items-center justify-center gap-6"
              >
                OFICINAS
                <Wrench className="h-8 w-8 md:h-16 md:w-16" />
              </Link>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <Link
                href="/solutions/midas"
                className="flex flex-col items-center justify-center gap-6"
              >
                MATERIAIS PARA CONSTRUÇÕES
                <BrickWall className="h-8 w-8 md:h-16 md:w-16" />
              </Link>
            </div>

            <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 hover:border-2 hover:border-sky-500/70">
              <Link
                href="/solutions/midas"
                className="flex flex-col items-center justify-center gap-6"
              >
                INDUSTRIAS
                <Factory className="h-8 w-8 md:h-16 md:w-16" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-10 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 text-center text-zinc-300">
        <div className="grid h-auto w-full grid-cols-1 justify-items-center gap-14 p-20 xl:grid-cols-3 xl:gap-8 xl:p-36">
          <div className="flex h-auto w-auto flex-col items-center gap-4 text-center xl:w-80">
            <Headset className="h-10 w-10" />
            <div className="font-baijamjuree-bold flex flex-col gap-2">
              <h2 className="text-2xl text-blue-300">Suporte</h2>
              <p className="">
                Suporte técnico rápido e personalizado, sem limites de chamadas.
                Nossa equipe estará pronto para o atendimento pelos canais
                WhatsApp, Skype, E-mails e telefones.
              </p>
            </div>
          </div>
          <div className="flex h-auto w-auto flex-col items-center gap-4 text-center xl:w-80">
            <RefreshCcw className="h-10 w-10" />
            <div className="flex flex-col gap-2 font-alt">
              <h2 className="text-2xl text-blue-300">Atualizações</h2>
              <p className="">
                Atualizações semanalmente com ajustes e melhoria de desempenho
                para garantir que seu sistema esteja com a melhor usabilidade e
                eficiência.
              </p>
            </div>
          </div>
          <div className="flex h-auto w-auto flex-col items-center gap-4 text-center xl:w-80">
            <Handshake className="h-10 w-10" />
            <div className="flex flex-col gap-2 font-alt">
              <h2 className="text-2xl text-blue-300">Proximidade</h2>
              <p className="">
                Aqui você será atendido por pessoas qualificadas e com
                atendimento humanizado, aberto e honesto com informações
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full flex-col items-center justify-around p-16">
        <h1 className="font-baijamjuree-bold text-4xl">BLOG</h1>
        <div className="grid w-full justify-around gap-4 p-20 text-center xl:grid-cols-4">
          <div className="h-96 w-80 border-2 border-cyan-300 p-20">1</div>
        </div>
      </div> */}
    </div>
  )
}
