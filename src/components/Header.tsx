export function Header() {
  return (
    // eslint-disable-next-line prettier/prettier
    <header className="mt-9 h-auto w-auto bg-cover bg-stars bg-center px-10 py-32  xl:h-screen xl:px-60 xl:py-48">
      <div className="w-full items-center justify-center gap-7 rounded-lg md:grid md:grid-cols-2">
        <div className="items-center justify-center gap-10 text-balance rounded-lg">
          <div className="w-auto rounded-md text-center font-alt text-4xl md:text-start md:text-5xl xl:py-28 xl:text-6xl">
            <h1 className="text-sky-500 xl:text-sky-500">
              <span className="">Transforme</span> sua gestão com nossas
              soluções que impulsionam resultados e eficiência.
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}
