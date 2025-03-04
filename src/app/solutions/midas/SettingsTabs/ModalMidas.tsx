'use client'
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import useMeasure from 'react-use-measure'
import { TabData } from './tabData'

export const MidasModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = TabData.map((tab) => {
    return tab.imageSrc
  })
  const [open, setOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState<(typeof TabData)[0] | null>(
    null,
  )

  return (
    <div className="grid place-content-center bg-neutral-950 py-10">
      <h2 className="pb-10 text-center font-alt text-3xl xl:text-4xl">
        Conheça as funcionalidades do{' '}
        <span className="text-blue-400">MIDAS</span>
      </h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }} // Começa deslocado para a esquerda e invisível
        animate={{ x: 0, opacity: 1 }} // Desliza para a posição original e aparece
        transition={{ duration: 0.5 }}
        className="grid min-h-[180px] grid-cols-1 items-center justify-center justify-items-start gap-2 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {TabData.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setSelectedTab(tab)
              setOpen(true)
            }}
            whileHover={{ backgroundColor: '#1d4ed8' }} // Azul mais escuro
            whileTap={{ backgroundColor: '#1e40af' }} // Azul ainda mais escuro
            className="w-full rounded-md bg-blue-500 px-8 py-3 font-medium text-white shadow-[3px_3px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            {tab.title}
          </motion.button>
        ))}
      </motion.div>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-7xl space-y-4 px-4 text-neutral-400">
          <h2 className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text text-center font-alt text-2xl text-transparent transition-all duration-300 hover:from-blue-500 hover:via-sky-500 hover:to-emerald-400 sm:text-3xl">
            {selectedTab?.title || 'Default Title'}
          </h2>
          <p className="text-justify text-base md:text-xl">
            {selectedTab?.heading || 'Default Heading'}
          </p>
          <div className="flex flex-col items-start gap-4 lg:flex-row xl:gap-8">
            <Image
              src={selectedTab?.imageSrc || '/default-image.png'}
              alt={selectedTab?.title || 'Default Alt Text'}
              width={800}
              height={800}
              className="h-auto rounded-md object-cover"
              loading="lazy"
              onClick={() => setIsOpen(true)} // Adicione um evento de clique para abrir o Lightbox
            />
            <ul className="px-4">
              {selectedTab?.items.map((item, index) => (
                <li key={index} className="list-decimal text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
      </DragCloseDrawer>
    </div>
  )
}

interface DragCloseDrawerProps {
  open: boolean
  setOpen: (open: boolean) => void
  children: React.ReactNode
}

const DragCloseDrawer = ({ open, setOpen, children }: DragCloseDrawerProps) => {
  const [scope, animate] = useAnimate()
  const [drawerRef, { height }] = useMeasure()

  const y = useMotionValue(0)
  const controls = useDragControls()
  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    })

    const yStart = typeof y.get() === 'number' ? y.get() : 0

    await animate('#drawer', {
      y: [yStart, height],
    })

    setOpen(false)
  }

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose()
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e)
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
                title="Drag handle"
                aria-label="Drag handle"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
