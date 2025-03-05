import { motion } from 'framer-motion'

import { ReactNode } from 'react'

export const RevealLinks = () => {
  return (
    <section className="flex-row place-content-center font-sans text-slate-50 xl:flex xl:gap-4">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  )
}

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-sm font-black uppercase lg:text-base"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children &&
          typeof children === 'string' &&
          children.split('').map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: '-100%',
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
      </div>
      <div className="absolute inset-0">
        {typeof children === 'string' &&
          children.split('').map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: '100%',
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
      </div>
    </motion.a>
  )
}
