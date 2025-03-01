import Link from 'next/link'

export function Header() {
  return (
    <header className="relative mt-9 h-auto w-full bg-maleImg bg-cover bg-center px-4 py-24 md:px-28 lg:px-48 xl:h-screen xl:px-64 xl:py-64">
      {/* Overlay para melhor contraste do texto */}
      <div className="absolute inset-0 bg-black/50 xl:bg-black/20"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:items-start">
          <div className="space-y-8 px-4 text-left">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl xl:text-6xl 2xl:text-7xl">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Transforme
              </span>{' '}
              sua gestão com nosso Sistema Inteligente
            </h1>

            <div className="flex justify-start">
              <Link
                href="/solutions/midas"
                className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                role="button"
                aria-label="Saiba mais sobre o sistema inteligente"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
