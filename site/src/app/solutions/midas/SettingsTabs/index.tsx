'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

import Image from 'next/image'
import cadastroImg from '../../../../../public/images/Cadastro.png'
import centralImg from '../../../../../public/images/Central.png'
import entradaImg from '../../../../../public/images/Entrada.png'
import nfeImg from '../../../../../public/images/NFe.png'
import nfseImg from '../../../../../public/images/NSFe.png'
import osImg from '../../../../../public/images/OS.png'
import pdvImg from '../../../../../public/images/PDV.png'
import produtoImg from '../../../../../public/images/Produto.png'
import relatoriosImg from '../../../../../public/images/Relatorios.png'
import transformacaoImg from '../../../../../public/images/Transformacao.png'
import vendasImg from '../../../../../public/images/Vendas.png'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <>
      {/* <div className="w-full bg-slate-800">
        <div className="w-auto border-t-2 border-slate-700" />
      </div> */}
      <Tabs.Root
        value={currentTab}
        onValueChange={setCurrentTab}
        className="h-auto w-full bg-slate-900 py-10"
        defaultValue="tab1"
      >
        <Tabs.List
          className="grid gap-2 px-2 sm:grid-cols-2 xl:grid-cols-9"
          aria-label="Categoria"
        >
          <TabItem
            value="tab1"
            title="Cadastros"
            isSelected={currentTab === 'tab1'}
          />
          <TabItem
            value="tab2"
            title="Produtos/Serviços"
            isSelected={currentTab === 'tab2'}
          />
          <TabItem
            value="tab3"
            title="Pedido de venda"
            isSelected={currentTab === 'tab3'}
          />
          <TabItem
            value="tab4"
            title="Ordem de Serviços"
            isSelected={currentTab === 'tab4'}
          />
          <TabItem
            value="tab5"
            title="PDV"
            isSelected={currentTab === 'tab5'}
          />
          <TabItem
            value="tab6"
            title="NF-e"
            isSelected={currentTab === 'tab6'}
          />
          <TabItem
            value="tab7"
            title="NFS-e"
            isSelected={currentTab === 'tab7'}
          />
          <TabItem
            value="tab8"
            title="Central de Caixa"
            isSelected={currentTab === 'tab8'}
          />
          <TabItem
            value="tab9"
            title="Entradas/Compras"
            isSelected={currentTab === 'tab9'}
          />
          <TabItem
            value="tab10"
            title="Relatórios"
            isSelected={currentTab === 'tab10'}
          />
          <TabItem
            value="tab11"
            title="Industrialização"
            isSelected={currentTab === 'tab11'}
          />
        </Tabs.List>

        <Tabs.Content
          className="flex flex-col items-center justify-center py-4"
          value="tab1"
        >
          <span className="mt-4 bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Cadastro de Pessoas
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>
                  Cadastro de funcionários, usuários, clientes e fornecedores
                </li>
                <li>Histórico de Cliente (acesso fácil)</li>
                <li>Cadastro com CNPJ automático</li>
                <li>Cadastro de multiplos endereços </li>
                <li>Preenchimento automatico de endereço por CEP</li>
                <li>Controle de situação de cliente</li>
                <li>Classes de clientes (juros e multas)</li>
                <li>Ajuste de limites</li>
                <li>Controle de pessoas autorizadas</li>
                <li>Inserção de foto</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={cadastroImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab2"
        >
          <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Produtos / Serviços
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Cadastro de produtos e serviços</li>
                <li>Consulta de GTIN (Código de barras)</li>
                <li>Controle de seção, marca, modelo, cor e tamanho</li>
                <li>Unidade de medida principal e secundária</li>
                <li>Locação</li>
                <li>Histórico de preços</li>
                <li>Histórico de entradas</li>
                <li>Movimento de estoque</li>
                <li>Detalhamento de custo (Mark up)</li>
                <li>Controle de tributação por UF</li>
                <li>Tabela de preço </li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={produtoImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab3"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Saídas / Vendas
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Prazo de pagamento</li>
                <li>Parcelamento personalizado</li>
                <li>Tabela de preço</li>
                <li>Inserção de multiplos itens</li>
                <li>Movimentação de estoque e financeiro</li>
                <li>Controle de entrega</li>
                <li>Trocas</li>
                <li>Comissão de vendas</li>
                <li>Geração de NFC-e e NF-e</li>
                <li>Impressão de comprovante e duplicata</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={vendasImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab4"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Ordem de Serviço
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Lançamento de produtos e serviços</li>
                <li>Cadastro e acompanhamento de objeto</li>
                <li>Movimentação de estoque e financeiro</li>
                <li>Geração de NFS-e</li>
                <li>Impressão de comprovante</li>
                <li>Agenda de serviços</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={osImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab5"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Ponto de Vendas
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Emissão de NFC-e</li>
                <li>Abertura e fechamento de caixa por turno</li>
                <li>Integração com TEF</li>
                <li>Integração com balança e gaveta</li>
                <li>Emissão de vale troco</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={pdvImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Nota Fiscal Eletrônica
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Emissão de NF-e</li>
                <li>Nota conjugada com produtos e serviços</li>
                <li>Nota de devolução e remessa</li>
                <li>Devolução de venda simplificado</li>
                <li>Autorização NFC-e pendentes</li>
                <li>Cancelamento de NF-e simplificado</li>
                <li>Emissão de CC-e simplificado</li>
                <li>Informaçãos complementares</li>
                <li>Visualização do espelho da nota</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={nfeImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab7"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Nota Fiscal de Serviço
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Emissão de NFS-e simplificado</li>
                <li>Configuração de tributação e retenção</li>
                <li>Integração com portal municipio</li>
                <li>Cancelamento de NFS-e simplificado</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={nfseImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab8"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Cetral de Caixa
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Fechamento de pedido pre-venda e orçamento</li>
                <li>Lançamento de sangria e suprimento</li>
                <li>Emissão de NFC-e e NF-e</li>
                <li>Fechamento e reabrimento de caixa</li>
                <li>Movimentação de estoque</li>
                <li>Movimentação financeiro</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={centralImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab9"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Entradas / Compras
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Importação de XML</li>
                <li>Download de XML</li>
                <li>Manifestar NF-e</li>
                <li>Conversor de unidade</li>
                <li>Atualização de custo e preço de venda</li>
                <li>Movimentação financeiro</li>
                <li>Movimentação de estoque</li>
                <li>ICMS-ST</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={entradaImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab10"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Relatórios
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Movimento e giro de produtos</li>
                <li>Movimentação de caixa</li>
                <li>Contas a pagar / receber</li>
                <li>Margem de lucro por venda</li>
                <li>DRE</li>
                <li>Curva ABC</li>
                <li>Inventário</li>
                <li>Sugestão de preço, compra e produção</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={relatoriosImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="flex flex-col items-center justify-center"
          value="tab11"
        >
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
            Industrialização
          </span>
          <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
            <div className="flex items-center justify-center px-10">
              <ul className="list-inside list-disc text-base md:text-xl">
                <li>Cadastro de matéria prima e produto acabado</li>
                <li>Tabela de custos</li>
                <li>Movimentação de estoque</li>
                <li>Sugestão de produção</li>
                <li>Relatório demonstrativo</li>
              </ul>
            </div>
            <div className="flex size-auto w-full justify-end px-10">
              <Image
                src={transformacaoImg}
                alt="Cadastro de Pessoas"
                className="rounded-md border-8 border-slate-500"
              />
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
