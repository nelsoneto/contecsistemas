import Image from 'next/image'
import Link from 'next/link'
import heroImg from '../../public/images/responsive-contec.svg'

export function Hero() {
  return (
    <section className="bg-slate-800 px-4 py-8 md:px-24 lg:px-44 xl:px-64 xl:py-16 2xl:px-64">
      <div className="grid w-full items-center justify-between gap-12 rounded-lg px-4 py-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-lg text-left lg:text-pretty xl:gap-8">
          <h1 className="font-baijamjuree-bold rounded-md text-2xl text-zinc-300 md:text-3xl lg:text-3xl">
            Com nossos produtos sua empresa vai ter mais{' '}
            <span className="text-blue-400">resultados</span> e eficiência.
          </h1>

          <p className="text-justify">
            Aumente a produtividade da sua empresa ao automatizar processos
            administrativos complexos e demorados. Com soluções integradas, você
            tem acesso a relatórios gerenciais detalhados e DREs (Demonstração
            de Resultados do Exercício) que oferecem insights valiosos para a
            tomada de decisões estratégicas. Além disso, o sistema permite a
            emissão de boletos bancários, NF-e, NFC-e, SPED Fiscal, PIS/COFINS e
            muito mais, tudo de forma ágil e segura. Simplifique suas operações,
            reduza custos e ganhe eficiência com ferramentas que otimizam a
            gestão do seu negócio.
          </p>
          <Link
            href="/solutions/midas"
            className="mb-6 rounded-lg bg-blue-600 px-4 py-3 text-center text-xl text-zinc-100 transition-colors hover:bg-blue-800"
          >
            Saiba mais
          </Link>
        </div>
        <div className="h-auto w-auto rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-sky-600 p-4 shadow-md ring-8 ring-sky-100">
          <Image
            alt="city"
            src={heroImg}
            className="h-auto w-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
