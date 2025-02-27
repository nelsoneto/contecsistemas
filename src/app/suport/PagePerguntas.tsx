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
      {/* Título */}
      <h2 className="flex w-auto justify-center pt-10 font-alt text-xl text-blue-400 sm:text-3xl">
        Perguntas Frequentes
      </h2>

      {/* Grid de conteúdo */}
      <div className="grid w-full items-center justify-center gap-4 px-1 py-10 xl:grid-cols-2 xl:px-40">
        {/* Imagem */}
        <div className="mb-4 flex justify-center">
          <Image
            src={perguntasImg}
            alt="Perguntas frequentes"
            className="relative hidden h-96 w-96 rounded-md border-8 border-slate-400 object-cover md:flex"
            priority // Prioriza o carregamento da imagem
          />
        </div>

        {/* Accordion */}
        <div className="w-auto px-8 font-alt sm:text-xl xl:mr-32 xl:px-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-blue-400">
                Preciso de internet para usar o sistema MIDAS?
              </AccordionTrigger>
              <AccordionContent>
                Não. O MIDAS não é um sistema on-line. Internet seria necessário
                apenas para emissão de Notas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-blue-400">
                O MIDAS PDV é um produto separado?
              </AccordionTrigger>
              <AccordionContent>
                Não. O MIDAS PDV vem integrado com a instalação do proprio
                MIDAS, entre em contacto para configurar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-blue-400">
                O MIDAS gera etiquetas?
              </AccordionTrigger>
              <AccordionContent>
                Sim. O MIDAS gera etiquetas de código de barras para produtos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-blue-400">
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
