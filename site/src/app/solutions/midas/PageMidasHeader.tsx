export function PageMidasHeader() {
  return (
    <div className="gap-2 text-pretty xl:flex-col">
      <div className="mt-10 flex h-full w-full justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-700 to-blue-900 py-4 xl:mt-14">
        <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text px-1 font-alt text-4xl text-transparent md:text-6xl">
          MIDAS
        </h1>
        <h2 className="hidden items-center justify-center text-center font-alt text-4xl xl:flex">
          A nossa solução mais{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-300 bg-clip-text px-1 text-transparent">
            completa para sua empresa.
          </span>
        </h2>
      </div>

      <div className="items-center text-center">
        <div className="max-h-screen bg-midas bg-center bg-no-repeat xl:h-screen">
          {/* <Image
            src={erpImg}
            alt="Sistema MIDAS" 
            className="h-4/6 w-4/6 object-cover"
          /> */}
        </div>
      </div>
      <div className="w-auto bg-gradient-to-r from-blue-900 via-cyan-700 to-blue-900 p-4 xl:px-72">
        <h1 className="mb-4 font-alt text-2xl xl:text-center xl:text-4xl">
          Simples de operar, tornando as vendas de balcões em atendimento
          rápido, prático, eficiente e seguro.
        </h1>
      </div>
    </div>
  )
}
