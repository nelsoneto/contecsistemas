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

// Interface para os cards de recursos
interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface SolutionCardProps {
  href: string
  title: string
  icon: React.ComponentType<{ className?: string }>
}

// Componente para os cards de soluções
const SolutionCard = ({ href, title, icon: Icon }: SolutionCardProps) => (
  <div className="rounded-lg border-2 border-blue-400/10 px-10 py-8 shadow-md shadow-sky-800/50 transition-all duration-300 hover:border-2 hover:border-sky-500/70">
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-6"
    >
      {title}
      <Icon className="h-8 w-8 md:h-16 md:w-16" />
    </Link>
  </div>
)

// Componente para os cards de recursos

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="flex h-auto w-auto flex-col items-center gap-4 text-center xl:w-80">
    <Icon className="h-10 w-10" />
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl text-blue-300">{title}</h2>
      <p className="text-pretty px-4 text-base">{description}</p>
    </div>
  </div>
)

export function Body() {
  // Dados para os cards de soluções
  const solutions = [
    { href: '/solutions/midas', title: 'CONFECÇÕES', icon: Shirt },
    { href: '/solutions/midas', title: 'SUPERMERCADOS', icon: ShoppingCart },
    { href: '/solutions/midas', title: 'ATACADO E VAREJO', icon: Package },
    { href: '/solutions/midas', title: 'OFICINAS', icon: Wrench },
    {
      href: '/solutions/midas',
      title: 'MATERIAIS PARA CONSTRUÇÕES',
      icon: BrickWall,
    },
    { href: '/solutions/midas', title: 'INDUSTRIAS', icon: Factory },
  ]

  // Dados para os cards de recursos
  const features = [
    {
      icon: Headset,
      title: 'Suporte',
      description:
        'Suporte técnico ágil e personalizado, sem limites de chamadas ou burocracia. Nossa equipe especializada está disponível pelos canais que você preferir: WhatsApp, Skype, E-mail ou Telefone. Resolvemos suas dúvidas e problemas de forma rápida e eficiente.',
    },
    {
      icon: RefreshCcw,
      title: 'Atualizações',
      description:
        'Atualizações semanais com ajustes precisos e otimizações de desempenho, garantindo que seu sistema esteja sempre rápido, seguro e eficiente. Mantemos sua operação alinhada com as melhores práticas e tecnologias, para que você tenha a melhor experiência e usabilidade possível.',
    },
    {
      icon: Handshake,
      title: 'Proximidade',
      description:
        'Atendimento humanizado e transparente, realizado por profissionais qualificados que priorizam a clareza e a empatia. Aqui, você recebe informações honestas e soluções personalizadas, criando uma relação de confiança e parceria com seu negócio.',
    },
  ]

  return (
    <div className="h-auto">
      {/* Seção de soluções */}
      <div className="h-auto bg-slate-900 text-zinc-300">
        <div className="flex h-full w-full flex-col items-center space-y-2 bg-pattern bg-center bg-no-repeat px-4 py-8 md:px-24 lg:px-44 xl:px-64 xl:py-10 2xl:px-64">
          <div className="flex flex-col gap-10 text-center font-alt md:px-10">
            <h1 className="text-2xl md:text-5xl">
              Conheça nosso software e as soluções que oferecemos em diversos
              segmentos:
            </h1>
          </div>

          <div className="font-baijamjuree-bold grid justify-center gap-8 px-2 py-8 text-center sm:grid-cols-2 md:text-lg xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </div>

      {/* Seção de recursos */}
      <div className="gap-10 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 text-zinc-300 md:text-sm 2xl:text-2xl">
        <div className="grid h-auto w-full grid-cols-1 justify-items-center gap-10 px-4 py-14 text-justify md:grid-cols-2 md:p-32 xl:grid-cols-3 xl:gap-8 xl:p-52">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}
