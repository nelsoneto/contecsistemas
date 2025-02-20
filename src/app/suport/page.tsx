'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import whatsAppImg from '../../../public/images/WhatsApp.png'
import { DownloadContents } from './DownloadContents'
import { PagePerguntas } from './PagePerguntas'

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

export default function SuportPage() {
  return (
    <>
      <Head>
        <title>Suporte | Contec</title>
        <meta name="description" content="Suporte Contecsistemas" />
      </Head>
      <div className="mx-auto max-h-max w-full text-slate-300">
        {/* Header Section */}
        <motion.header
          className="mb-6 mt-36 flex h-40 w-full items-center justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-800 to-blue-900 py-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Título com gradiente */}
          <motion.h1
            className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 bg-clip-text px-1 font-alt text-3xl text-transparent md:text-5xl"
            variants={itemVariants}
          >
            Suporte técnico
          </motion.h1>

          {/* WhatsApp Link */}
          <motion.div variants={itemVariants}>
            <Link
              href="https://wa.me/556999705453"
              rel="noopener noreferrer"
              target="_blank"
              className="hidden items-center justify-center gap-2 text-center font-alt text-4xl md:flex"
              aria-label="Contate-nos via WhatsApp"
            >
              <Image
                src={whatsAppImg}
                alt="Ícone do WhatsApp"
                className="w-10 object-cover"
                priority // Prioriza o carregamento da imagem
              />
              (69) 99970-5453
            </Link>
          </motion.div>

          {/* Telefone Fixo */}
          <motion.div variants={itemVariants}>
            <a
              href="tel:+556935356826"
              className="hidden xl:flex"
              aria-label="Ligue para nosso telefone fixo"
            >
              (69) 3535-6826
            </a>
          </motion.div>
        </motion.header>

        {/* Download Section */}
        <DownloadContents />

        {/* FAQ Section */}
        <PagePerguntas />
      </div>
    </>
  )
}
