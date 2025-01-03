import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import perguntasImg from '../../../public/images/perguntas2.jpg'

export function PagePerguntas() {
  return (
    <div className="w-full bg-slate-800">
      <h2 className="flex w-auto justify-center pt-10 font-alt text-xl text-blue-400 sm:text-3xl">
        Perguntas Frequentes
      </h2>
      <div className="grid w-full items-center justify-center gap-4 px-1 py-10 xl:grid-cols-2 xl:px-40">
        <div className="mb-4 flex justify-center">
          <Image
            src={perguntasImg}
            alt="Perguntas frequentes"
            className="relative hidden h-96 w-96 rounded-md border-8 border-slate-400 object-cover md:flex"
          />
        </div>
        <div className="w-auto px-8 font-alt sm:text-xl xl:mr-32 xl:px-0">
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between py-2 text-start">
              Preciso de internet para usar o sistema MIDAS?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="flex w-full origin-top px-2 pb-4 text-start font-sans text-blue-400 transition duration-200 ease-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              Não. O MIDAS não é um sistema on-line. Internet seria necessário
              apenas para emissão de Notas.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between gap-4 py-2 text-start">
              O MIDAS PDV é um produto separado?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="text-wrap px-2 pb-4 font-sans text-blue-400 transition duration-200 ease-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              Não. O MIDAS PDV vem integrado com a instalação do proprio MIDAS,
              entre em contacto para configurar.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between gap-4 py-2 text-start">
              O suporte local tem que ser agendado?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="flex w-full origin-top px-2 pb-4 text-start font-sans text-blue-400 transition duration-200 ease-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              Sim. Pedimos para agendar com 1 dia de antecedencia.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between gap-4 py-2 text-start">
              Quais são os tipos de Notas que o MIDAS faz?
              <ChevronDown className="w-8 text-blue-400 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="flex w-full origin-top px-2 pb-4 text-start font-sans text-blue-400 transition duration-200 ease-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              O MIDAS gera e transmite notas, NF-e, NFC-e, MDF-e, CT-e, NFS-e.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
  )
}
