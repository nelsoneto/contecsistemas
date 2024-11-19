import { Mail, MapPin, Phone } from 'lucide-react'
export function Footer() {
  return (
    <div className="absolute max-h-full w-full">
      <div className="grid grid-cols-1 gap-8 bg-slate-950 px-4 py-16 xl:grid-cols-3 xl:justify-items-center xl:px-24 xl:py-32">
        <div className="flex flex-col gap-3">
          <h1 className="font-alt text-blue-400">Contato</h1>
          <span className="flex-1 items-center gap-4 md:flex">
            <MapPin className="h-3 w-3 md:h-4 md:w-4" />{' '}
            <p className="w-36 text-sm">Rua Jacundá 4284 Ariquemes Rondônia.</p>
          </span>
          <span className="flex-1 items-center gap-4 md:flex">
            <Phone className="h-3 w-3 md:h-4 md:w-4" />
            <a
              href="https://wa.me/556999705453"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm"
            >
              (69)99970-5457 - Suporte
            </a>
          </span>
          <span className="flex-1 items-center gap-4 md:flex">
            <Phone className="h-3 w-3 md:h-4 md:w-4" />
            <a
              href="https://wa.me/556935356826 "
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm"
            >
              (69)3535-6826 - Financeiro
            </a>
          </span>
          <span className="flex-1 items-center gap-4 md:flex">
            <Mail className="h-3 w-3 md:h-4 md:w-4" />
            <p className="text-sm">contato@contecsistemas.com.br</p>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-alt text-blue-400">Seguimentos</span>
          <a href="/solutions/midas">Lojas de confecções</a>
          <a href="/solutions/midas">Supermercados</a>
          <a href="/solutions/midas">Panificadoras</a>
          <a href="/solutions/midas">Oficinas</a>
          <a href="/solutions/midas">Mat. para construções</a>
          <a href="/solutions/midas">Industrias</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-alt text-blue-400">Navegue</span>
          <a href="/">Inicio</a>
          <a href="/">Blog</a>
          <a href="/">Suporte</a>
          <a href="/solutions/midas">Produtos</a>
        </div>
      </div>
      <div className="flex h-20 w-full items-center justify-center bg-slate-950 text-[12px] sm:text-sm">
        <h1 className="text-center">
          © 2024 Contec Sistemas - Todos os direitos reservados
        </h1>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-teal-300 via-blue-400 to-blue-500"></div>
    </div>
  )
}
