'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { TabContents } from './TabContents'
import { TabData } from './tabData'
import { TabItem } from './TabItem'

interface TabRefs {
  [key: string]: HTMLDivElement | null
}

// Variantes de animação (opcional, se estiver usando Framer Motion)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const tabItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>(TabData[0].id.toString())
  const [isUserTabbing, setIsUserTabbing] = useState(false) // Estado para rastrear interações
  const isInitialRender = useRef(true) // Ref para rastrear a primeira renderização
  const tabRefs = useRef<TabRefs>({})

  // Função para rolar suavemente até a aba selecionada
  const scrollToTab = useCallback((tabValue: string) => {
    const element = tabRefs.current[tabValue]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  // Efeito para rolar até a aba ao mudar
  useEffect(() => {
    if (isInitialRender.current) {
      // Ignora a rolagem na primeira renderização
      isInitialRender.current = false
      return
    }

    if (isUserTabbing) {
      scrollToTab(currentTab)
      setIsUserTabbing(false) // Reseta o estado após rolar
    }
  }, [currentTab, isUserTabbing, scrollToTab])

  // Função para lidar com a seleção de abas
  const handleTabChange = (tabValue: string) => {
    setCurrentTab(tabValue.toString())
    setIsUserTabbing(true) // Marca que o usuário está interagindo
  }

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={handleTabChange} // Usa a nova função
      className="h-auto w-full bg-slate-800 py-10 text-center"
      defaultValue={TabData[0].id.toString()}
    >
      {/* Lista de abas */}
      <Tabs.List
        className="grid gap-2 px-2 sm:grid-cols-2 xl:grid-cols-11"
        aria-label="Categorias de configurações"
      >
        <motion.div
          className="contents"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {TabData.map((tab) => (
            <motion.div key={tab.id} variants={tabItemVariants}>
              <TabItem
                value={tab.id.toString()}
                title={tab.title}
                isSelected={currentTab === tab.id.toString()}
                onClick={() => handleTabChange(tab.id.toString())} // Usa a nova função
              />
            </motion.div>
          ))}
        </motion.div>
      </Tabs.List>

      {/* Conteúdo das abas */}
      {TabData.map((tab) => (
        <Tabs.Content
          key={tab.id}
          value={tab.id.toString()}
          className="tabs-content"
          ref={(el) => {
            tabRefs.current[tab.id] = el
          }}
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <TabContents
              heading={tab.heading}
              imageSrc={tab.imageSrc}
              items={tab.items}
            />
          </motion.div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
