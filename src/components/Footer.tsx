import {
  Facebook,
  Instagram,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'

export function Footer() {
  const contactInfo = [
    {
      icon: <MapPin className="h-3 w-3 md:h-4 md:w-4" />,
      text: 'Rua Jacundá 4284 Ariquemes Rondônia.',
    },
    {
      icon: <Phone className="h-3 w-3 md:h-4 md:w-4" />,
      text: '(69)99970-5453 - Suporte',
      href: 'https://wa.me/556999705453',
    },
    {
      icon: <Phone className="h-3 w-3 md:h-4 md:w-4" />,
      text: '(69)3535-6826 - Financeiro',
      href: 'https://wa.me/556935356826',
    },
    {
      icon: <Mail className="h-3 w-3 md:h-4 md:w-4" />,
      text: 'contato@contecsistemas.com.br',
    },
  ]

  const socialMedia = [
    {
      icon: <Instagram className="h-5 w-5" />,
      text: 'Instagram',
      href: 'https://www.instagram.com/contecsistemas/',
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      text: 'Facebook',
      href: 'https://www.facebook.com/contecsistemas?locale=pt_BR',
    },
    {
      icon: <LinkedinIcon className="h-5 w-5" />,
      text: 'Facebook',
      href: 'https://www.linkedin.com/company/contecsistemas/',
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      text: 'YouTube',
      href: 'https://www.youtube.com/@contecsistemas5774',
    },
  ]

  const segments = [
    { label: 'Confecções', href: '/solutions/midas' },
    { label: 'Supermercados', href: '/solutions/midas' },
    { label: 'Panificadoras', href: '/solutions/midas' },
    { label: 'Oficinas', href: '/solutions/midas' },
    { label: 'Mat. para construções', href: '/solutions/midas' },
    { label: 'Industrias', href: '/solutions/midas' },
  ]

  const navigationLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Suporte', href: '/suport' },
    { label: 'Produtos', href: '/solutions/midas' },
  ]

  return (
    <footer className="relative w-full">
      <div className="grid grid-cols-1 gap-8 bg-slate-900 px-4 py-16 md:px-24 lg:px-44 xl:grid-cols-4 xl:justify-items-center xl:px-64 xl:py-32">
        {/* Contact Section */}
        <div className="flex flex-col gap-3">
          <h2 className="font-alt text-blue-400">Contato</h2>
          {contactInfo.map((item, index) => (
            <span key={index} className="flex items-center gap-4">
              {item.icon}
              {item.href ? (
                <a
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-sm hover:underline"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-sm">{item.text}</p>
              )}
            </span>
          ))}
        </div>

        {/* Segments Section */}
        <div className="flex flex-col gap-2">
          <h2 className="font-alt text-blue-400">Segmentos</h2>
          {segments.map((segment, index) => (
            <a key={index} href={segment.href} className="hover:underline">
              {segment.label}
            </a>
          ))}
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col gap-2">
          <h2 className="font-alt text-blue-400">Navegue</h2>
          {navigationLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h2 className="font-alt text-blue-400">Rede Sociais</h2>
          <div className="flex gap-4">
            {socialMedia.map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-4 rounded-full border border-slate-800 bg-slate-800 p-2 hover:border-blue-800 hover:bg-blue-800"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-sm hover:underline"
                  >
                    {item.icon}
                  </a>
                ) : (
                  <p className="text-sm">{item.text}</p>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-20 w-full items-center justify-center bg-slate-900 text-[12px] sm:text-sm">
        <p className="text-center">
          © 2024 Contec Sistemas - Todos os direitos reservados
        </p>
      </div>

      {/* Gradient Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-teal-300 via-blue-400 to-blue-500"></div>
    </footer>
  )
}
