import { FiCreditCard, FiMail, FiUser, FiUsers } from 'react-icons/fi'

import { IconType } from 'react-icons'

const HoverCards = () => {
  return (
    <div className="p-4">
      <p className="mb-2 text-xl font-semibold">
        Conheça as funcionalidades do MIDAS
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card
          title="Account"
          subtitle="Manage profile"
          href="#"
          Icon={FiUser}
        />
        <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card
          title="Billing"
          subtitle="Manage cards"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  )
}

const Card = ({
  title,
  subtitle,
  Icon,
  href,
}: {
  title: string
  subtitle: string
  Icon: IconType
  href: string
}) => {
  return (
    <a
      href={href}
      className="group relative w-full overflow-hidden rounded border-[1px] border-slate-300 bg-white p-4"
    >
      <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-violet-600 to-indigo-600 transition-transform duration-300 group-hover:translate-y-[0%]" />

      <Icon className="absolute -right-12 -top-12 z-10 text-9xl text-slate-100 transition-transform duration-300 group-hover:rotate-12 group-hover:text-violet-400" />
      <Icon className="relative z-10 mb-2 text-2xl text-violet-600 transition-colors duration-300 group-hover:text-white" />
      <h3 className="relative z-10 text-lg font-medium text-slate-950 duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="relative z-10 text-slate-400 duration-300 group-hover:text-violet-200">
        {subtitle}
      </p>
    </a>
  )
}

export default HoverCards
