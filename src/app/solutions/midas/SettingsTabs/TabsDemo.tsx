'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import { TabData } from './tabData'

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animação em cascata para os filhos
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function TabsDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = TabData.map((tab) => {
    return tab.imageSrc
  })

  return (
    <div className="mt-10 w-full px-4">
      <div className="mb-10 flex items-center justify-center">
        <h2 className="text-center font-alt text-3xl xl:text-4xl">
          Conheça as funcionalidades do{' '}
          <span className="text-blue-400">MIDAS</span>
        </h2>
      </div>
      <Tabs defaultValue="account" className="flex w-full flex-col">
        {/* Anima o TabsList */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TabsList aria-label="Selecione uma categoria">
            {TabData.map((tab) => (
              <motion.div key={tab.id} variants={itemVariants}>
                <TabsTrigger value={tab.id.toString()}>{tab.title}</TabsTrigger>
              </motion.div>
            ))}
          </TabsList>
        </motion.div>

        {/* Anima o conteúdo das abas */}
        {TabData.map((tab) => (
          <TabsContent key={tab.id} value={tab.id.toString()}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <Card className="mb-4 bg-slate-900 text-gray-400">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text font-alt text-2xl text-transparent transition-all duration-300 hover:from-blue-500 hover:via-sky-500 hover:to-emerald-400 md:text-4xl">
                    {tab.title}
                  </CardTitle>
                  <CardDescription className="text-xl">
                    {tab.heading}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-col items-start justify-center gap-10 lg:flex-row">
                    <Image
                      src={tab.imageSrc}
                      alt={tab.title}
                      width={800}
                      height={800}
                      className="h-full w-full rounded-md"
                      onClick={() => {
                        setPhotoIndex(images.indexOf(tab.imageSrc))
                        setIsOpen(true)
                      }}
                    />
                    {/* Anima os itens da lista */}
                    <motion.ul
                      className="flex list-disc flex-col gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {tab.items.map((item) => (
                        <motion.li key={item} variants={itemVariants}>
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  )
}
