import Link from 'next/link'

export function Header() {
  return (
    // eslint-disable-next-line prettier/prettier
    <header className="mt-9 h-auto w-auto bg-cover bg-maleImg bg-center px-10 py-32  xl:h-screen xl:px-60 xl:py-48">
      {/* <div className="bg-overlay-dark absolute inset-0"></div> */}
      <div className="w-full items-center justify-center gap-7 rounded-lg md:grid md:grid-cols-2">
        <div className="items-center justify-center gap-10 text-balance rounded-lg">
          <div className="w-auto rounded-md text-center font-alt text-3xl md:text-start md:text-5xl xl:py-28 xl:text-6xl">
            <h1 className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text py-2 text-transparent">
              <span className="">Transforme</span> sua gestão com nosso Sistema
              Inteligente.
            </h1>
            <div className="py-6">
              <Link
                href="/solutions/midas"
                className="mb-6 rounded-lg bg-blue-600 px-4 py-3 text-center text-xl text-zinc-100 transition-colors hover:bg-blue-500"
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
