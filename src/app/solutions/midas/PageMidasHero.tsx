export function PageMidasHero() {
  return (
    <>
      <div className="flex w-auto flex-col space-y-8 bg-slate-800 py-4 xl:px-72">
        <div className="justify-centerp flex flex-col items-center px-4 py-4 xl:px-10">
          <h2 className="mt-6 font-alt text-3xl xl:text-4xl">
            Conheça as características técnicas do{' '}
            <span className="text-blue-400">MIDAS</span>
          </h2>
        </div>
        <div className="grid h-full w-full gap-6 pb-9 text-lg xl:grid-cols-2">
          <div className="w-full py-2 text-justify">
            <ul className="list-inside list-disc">
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Controle financeiro
              </li>{' '}
              <p className="mb-5 px-4">
                Renegociações, fluxo de caixa, gestão de contas a pagar e a
                receber, grupos de receitas e despesas, centro de custo,
                controle de comissões e vendas.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Estoque
              </li>{' '}
              <p className="mb-5 px-4">
                Cadastro, controle, histórico, movimentação, condicional,
                importação do XML na entrada, com cadastramento automático do
                produto, controle de unidades.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Cadastros
              </li>
              <p className="mb-5 px-4">
                Clientes, fornecedores, funcionários, convênios, contas e
                bancos.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Fiscal
              </li>
              <p className="mb-5 px-4">
                Emissão Nota Fiscal Eletrônica, EFD IMCS/IPI (SPED Fiscal) e EFD
                Contribuições, CT-e, CC-e, NFC-e, MDF-e.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Produção
              </li>
              <p className="mb-5 px-4">
                Cadastro de receitas para produtos industrializados com baixa
                automática de insumos na produção.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Ordem de serviços
              </li>
              <p className="mb-5 px-4">
                Criação de controle sobre serviços prestados.
              </p>
            </ul>
          </div>
          <div className="w-full py-2 text-justify">
            <ul className="list-inside list-disc">
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Controle de entregas
              </li>
              <p className="mb-5 px-4">
                Agendamento de entrega de produtos, relatórios de itens a
                entregar e previsão de entregas.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Conferência de movimento
              </li>
              <p className="mb-5 px-4">
                Conferência de saídas de produtos com leitura de código de
                barras e impressão de etiquetas.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Agendas
              </li>
              <p className="mb-5 px-4">
                Agendamento de serviços com geração de ordem de serviços.
                Agendamento de cobrança com emissão de cobrança.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Força de Vendas
              </li>
              <p className="mb-5 px-4">
                Módulo PDV (supermercados) venda, Tablets e Smartphones.
              </p>
              <li className="px-4 font-alt uppercase text-blue-400 xl:px-0">
                Atualização
              </li>
              <p className="mb-5 px-4">
                Sistema atualizado com as últimas exigências relacioadas a
                emissão de NF-e e NFC-e.
              </p>
            </ul>
          </div>
        </div>
        {/* <div className="border-t-2 border-slate-700" /> */}
      </div>
    </>
  )
}
