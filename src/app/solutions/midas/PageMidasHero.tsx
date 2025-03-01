'use client'
import { motion } from 'framer-motion'
export function PageMidasHero() {
  const features = [
    {
      title: 'Controle financeiro',
      description:
        'Renegociações, fluxo de caixa, gestão de contas a pagar e a receber, grupos de receitas e despesas, centro de custo, controle de comissões e vendas.',
    },
    {
      title: 'Estoque',
      description:
        'Cadastro, controle, histórico, movimentação, condicional, importação do XML na entrada, com cadastro automático do produto, controle de unidades.',
    },
    {
      title: 'Cadastros',
      description:
        'Clientes, fornecedores, funcionários, convênios, contas e bancos.',
    },
    {
      title: 'Fiscal',
      description:
        'Emissão Nota Fiscal Eletrônica, EFD ICMS/IPI (SPED Fiscal) e EFD Contribuições, CT-e, CC-e, NFC-e, MDF-e.',
    },
    {
      title: 'Produção',
      description:
        'Cadastro de receitas para produtos industrializados com baixa automática de insumos na produção.',
    },
    {
      title: 'Ordem de serviços',
      description: 'Criação de controle sobre serviços prestados.',
    },
    {
      title: 'Controle de entregas',
      description:
        'Agendamento de entrega de produtos, relatórios de itens a entregar e previsão de entregas.',
    },
    {
      title: 'Conferência de movimento',
      description:
        'Conferência de saídas de produtos com leitura de código de barras e impressão de etiquetas.',
    },
    {
      title: 'Agendas',
      description:
        'Agendamento de serviços com geração de ordem de serviços. Agendamento de cobrança com emissão de cobrança.',
    },
    {
      title: 'Força de Vendas',
      description: 'Módulo PDV (supermercados) venda, Tablets e Smartphones.',
    },
    {
      title: 'Atualização',
      description:
        'Sistema atualizado com as últimas exigências relacionadas a emissão de NF-e e NFC-e.',
    },
  ]

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

  return (
    <motion.section
      className="mx-auto mb-10 max-w-7xl px-4 py-8 md:px-24 lg:px-28"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="mb-12 text-center" variants={itemVariants}>
        <h2 className="font-alt text-3xl xl:text-4xl">
          Conheça as características técnicas do{' '}
          <span className="text-blue-400">MIDAS</span>
        </h2>
      </motion.header>
      <motion.div
        className="mb-10 grid gap-2 md:grid-cols-2 lg:gap-8"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group rounded-lg p-6 transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }} // Efeito de hover
          >
            <dl className="space-y-2">
              <dt className="font-alt text-2xl uppercase text-blue-400">
                {feature.title}
              </dt>
              <dd className="text-gray-400">{feature.description}</dd>
            </dl>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
