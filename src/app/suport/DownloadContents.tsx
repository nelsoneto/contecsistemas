import { motion } from 'framer-motion'
import { Download, MonitorDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import anyDeskImg from '../../../public/images/AnyDesk.png'
import teamViewerImg from '../../../public/images/TeamViewer.png'

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

export function DownloadContents() {
  return (
    <>
      <div className="mb-8 flex flex-col items-center justify-center py-10 text-2xl xl:px-64">
        {/* Título com animação */}
        <motion.h1
          className="font-alt text-xl xl:text-3xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Downloads Importantes
        </motion.h1>

        {/* Grid de cards com animação */}
        <motion.div
          className="grid gap-8 py-10 sm:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1: Acesso Remoto */}
          <motion.div
            className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2"
            variants={itemVariants}
          >
            <span className="flex justify-center font-alt">Acesso Remoto</span>
            <div className="flex flex-col gap-2 py-4 text-base">
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <Link
                  href="/download/utilitarios/AcessoRemoto_TeamViewer.exe"
                  download="AcessoRemoto_TeamViewer.exe"
                >
                  <Image
                    src={teamViewerImg}
                    alt="Team Viewer"
                    className="w-36 object-cover p-2"
                  />
                </Link>
              </span>
              <span className="flex justify-center rounded-lg hover:bg-slate-200">
                <Link
                  href="/download/utilitarios/AcessoRemoto_AnyDesk.exe"
                  download="AcessoRemoto_AnyDesk.exe"
                >
                  <Image
                    src={anyDeskImg}
                    alt="AnyDesk"
                    className="w-36 object-cover p-2"
                  />
                </Link>
              </span>
            </div>
          </motion.div>

          {/* Card 2: MIDAS 2.21 */}
          <motion.div
            className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2"
            variants={itemVariants}
          >
            <span className="flex justify-center font-alt">Instalação</span>
            <div className="flex flex-col gap-1 text-base">
              {/* <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="download/midas/install/midas_221_firebird5_setup.exe"
                  download="midas_221_firebird5_setup.exe"
                  className="flex gap-4 p-2"
                >
                  <MonitorDown className="" />
                  <p className="font-bold text-slate-800">MIDAS 2.21 FB5</p>
                </Link>
              </span> */}
              <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="download/midas/install/midas_222_firebird5_setup.exe"
                  download="midas_222_firebird5_setup.exe"
                  className="flex gap-2 p-2"
                >
                  <MonitorDown className="" />
                  <p className="font-bold text-slate-800">MIDAS 2.22 FB5.0</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="download/midas/install/midas_221_firebird5_setup.exe"
                  download="midas_221_firebird5_setup.exe"
                  className="flex gap-2 p-2"
                >
                  <MonitorDown className="" />
                  <p className="font-bold text-slate-800">MIDAS 2.21 FB5.0</p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg px-5 hover:bg-slate-200">
                <Link
                  href="download/midas/install/midas_221_firebird2_5_setup.exe"
                  download="midas_221_firebird2_5_setup.exe"
                  className="flex gap-2 p-2"
                >
                  <MonitorDown className="" />
                  <p className="font-bold text-slate-800">MIDAS 2.21 FB2.5</p>
                </Link>
              </span>
            </div>
          </motion.div>

          {/* Card 3: Versões */}
          <motion.div
            className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2"
            variants={itemVariants}
          >
            <span className="flex justify-center font-alt">Atualização</span>
            <div className="flex flex-col gap-1 text-lg">
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="download/midas/update/midas_222_update.exe"
                  download="midas_222_update.exe"
                  className="flex gap-4 p-2"
                >
                  <Download className="" />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS Update 2.22
                  </p>
                </Link>
              </span>
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="download/midas/update/midas_221_update.exe"
                  download="midas_221_update.exe"
                  className="flex gap-4 p-2"
                >
                  <Download className="" />
                  <p className="text-base font-bold text-slate-800">
                    MIDAS Update 2.21
                  </p>
                </Link>
              </span>
            </div>
          </motion.div>

          {/* Card 4: Utilitários */}
          <motion.div
            className="flex h-60 w-auto flex-col gap-4 rounded-lg bg-slate-100 p-4 text-blue-500 shadow-sm shadow-blue-300 outline outline-offset-2"
            variants={itemVariants}
          >
            <span className="flex justify-center font-alt">Utilitários</span>
            <div className="flex flex-col gap-1 text-base">
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="download/utilitarios/Produtos.exe"
                  download="Produtos.exe"
                  className="flex gap-2 p-2"
                >
                  <Download className="" />
                  <p className="font-bold text-slate-800">Produtos.exe</p>
                </Link>
              </span>
              {/* <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="download/utilitarios/ibexpert.exe"
                  download="ibexpert.exe"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="font-bold text-slate-800">ibexpert</p>
                </Link>
              </span> */}
              <span className="flex justify-between rounded-lg hover:bg-slate-200">
                <Link
                  href="download/utilitarios/IFB.exe"
                  download="ifb.exe"
                  className="flex gap-2 p-2"
                >
                  <Download />
                  <p className="font-bold text-slate-800">IFB</p>
                </Link>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
