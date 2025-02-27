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
  return (
    <Tabs
      defaultValue="account"
      className="flex w-full flex-col items-center justify-center"
    >
      {/* Anima o TabsList */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TabsList
          aria-label="Selecione uma categoria"
          className="grid w-full grid-cols-2 justify-items-center gap-2 xl:grid-cols-11"
        >
          {TabData.map((tab) => (
            <motion.div key={tab.value} variants={itemVariants}>
              <TabsTrigger className="p-2 sm:p-4" value={tab.value}>
                {tab.title}
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>
      </motion.div>

      {/* Anima o conteúdo das abas */}
      {TabData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <Card className="border-2 border-slate-400 bg-slate-900 text-gray-400">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text font-alt text-2xl text-transparent transition-all duration-300 hover:from-blue-500 hover:via-sky-500 hover:to-emerald-400 sm:text-3xl">
                  {tab.title}
                </CardTitle>
                <CardDescription className="text-xl">
                  {tab.heading}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
                  <Image
                    src={tab.imageSrc}
                    alt={tab.title}
                    width={800}
                    height={800}
                    className="h-auto w-full"
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
  )
}
