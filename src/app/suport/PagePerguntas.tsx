import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

        <div className="w-full pl-4 pr-4 font-alt sm:text-xl xl:pr-36">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Preciso de internet para usar o sistema MIDAS?
              </AccordionTrigger>
              <AccordionContent>
                Não. O MIDAS não é um sistema on-line. Internet seria necessário
                apenas para emissão de Notas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                O MIDAS PDV é um produto separado?
              </AccordionTrigger>
              <AccordionContent>
                Não. O MIDAS PDV vem integrado com a instalação do proprio
                MIDAS, entre em contacto para configurar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                O suporte local tem que ser agendado?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Pedimos para agendar com 1 dia de antecedencia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Quais são os tipos de Notas que o MIDAS faz?
              </AccordionTrigger>
              <AccordionContent>
                O MIDAS gera e transmite notas, NF-e, NFC-e, MDF-e, CT-e, NFS-e.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
