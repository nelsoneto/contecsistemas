import { motion } from 'framer-motion'
import Image from 'next/image'
import { memo } from 'react'

interface TabContentProps {
  heading: string
  imageSrc: string
  items: string[]
}

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay entre as animações dos filhos
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120 },
  },
}

export const TabContents = memo(function TabContents({
  heading,
  imageSrc,
  items,
}: TabContentProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Título com gradiente */}
      <motion.h2
        className="mt-4 bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl"
        variants={itemVariants}
      >
        {heading}
      </motion.h2>

      {/* Conteúdo da aba */}
      <motion.div
        className="grid gap-10 py-10 text-start xl:grid-cols-2 xl:px-32"
        variants={containerVariants}
      >
        {/* Lista de itens */}
        <div className="px-4">
          <motion.div
            className="flex h-auto items-center justify-center rounded-sm bg-slate-900 p-4 md:h-[550px]"
            variants={containerVariants}
          >
            <ul className="list-inside list-disc space-y-4 text-base md:text-xl">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-gray-300"
                  variants={itemVariants}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Imagem */}
        <motion.div
          className="flex size-auto w-full justify-end px-10"
          variants={imageVariants}
        >
          <Image
            src={imageSrc}
            alt={`Imagem ilustrativa de ${heading}`}
            width={1400}
            height={1400}
            className="rounded-md border-8 border-slate-500 transition-all duration-300 hover:scale-105 hover:border-slate-400"
            priority={true}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
})
