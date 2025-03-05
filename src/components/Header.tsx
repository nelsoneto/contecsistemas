'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Header() {
  return (
    <header className="relative mt-9 h-auto w-full bg-maleImg bg-cover bg-center px-4 py-24 md:px-28 lg:px-48 xl:h-screen xl:px-64 xl:py-64">
      {/* Overlay para melhor contraste do texto */}
      <div className="absolute inset-0 bg-black/50 xl:bg-black/20"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:items-start">
          <div className="space-y-8 px-4 text-left">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl xl:text-6xl 2xl:text-7xl">
              <span className="relative">
                Transforme
                <svg
                  viewBox="0 0 286 73"
                  fill="none"
                  className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 1.25,
                      ease: 'easeInOut',
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#3770db"
                    strokeWidth="3"
                  />
                </svg>
              </span>{' '}
              sua gestão com nosso Sistema Inteligente
            </h1>

            <div className="flex justify-start">
              <Link
                href="/solutions/midas"
                className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                role="button"
                aria-label="Saiba mais sobre o sistema inteligente"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
