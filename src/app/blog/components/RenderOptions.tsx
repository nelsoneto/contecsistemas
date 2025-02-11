import { Block, BLOCKS, Inline, MARKS } from '@contentful/rich-text-types'
import Image from 'next/image'

// Função para renderizar blocos de código
const CodeBlock = ({ code }: { code: string }) => <code>{code}</code>

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: React.ReactNode) => {
      return <p className="custom-text-color mb-4">{children}</p>
    },
    [BLOCKS.HEADING_1]: (_node: Block | Inline, children: React.ReactNode) => {
      return <h1 className="mb-4 text-4xl font-bold">{children}</h1>
    },
    [BLOCKS.HR]: () => {
      return <hr className="my-4" />
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block) => {
      const { contentType } = node.data.target.sys
      if (contentType.sys.id === 'codeBlock') {
        const { code } = node.data.target.fields
        return <CodeBlock code={code} />
      }
      return null
    },
    [BLOCKS.HEADING_2]: (_node: Block | Inline, children: React.ReactNode) => {
      return <h2 className="mb-4 text-3xl font-bold">{children}</h2>
    },
    [BLOCKS.HEADING_3]: (_node: Block | Inline, children: React.ReactNode) => {
      return <h3 className="mb-4 text-2xl font-bold">{children}</h3>
    },
    [BLOCKS.HEADING_4]: (_node: Block | Inline, children: React.ReactNode) => {
      return <h4 className="mb-4 text-xl font-bold">{children}</h4>
    },
    [BLOCKS.HEADING_5]: (_node: Block | Inline, children: React.ReactNode) => {
      return <h5 className="mb-4 text-lg font-bold">{children}</h5>
    },
    [BLOCKS.HEADING_6]: (_node: Block | Inline, children: React.ReactNode) => {
      return <h6 className="mb-4 text-base font-bold">{children}</h6>
    },
    [BLOCKS.UL_LIST]: (_node: Block | Inline, children: React.ReactNode) => {
      return <ul className="mb-4 list-disc pl-5">{children}</ul>
    },
    [BLOCKS.OL_LIST]: (_node: Block | Inline, children: React.ReactNode) => {
      return <ol className="mb-4 list-decimal pl-5">{children}</ol>
    },
    [BLOCKS.LIST_ITEM]: (_node: Block | Inline, children: React.ReactNode) => {
      return <li className="mb-2">{children}</li>
    },
    [BLOCKS.QUOTE]: (_node: Block | Inline, children: React.ReactNode) => {
      return (
        <blockquote className="mb-4 border-l-4 border-gray-500 pl-4 italic text-gray-500">
          {children}
        </blockquote>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { file, title } = (node.data.target as any).fields
      const imageUrl = file.url
      return (
        <Image
          src={`https:${imageUrl}`}
          alt={title}
          width={500}
          height={300}
          className="mb-4"
        />
      )
    },
    [BLOCKS.TABLE]: (_node: Block | Inline, children: React.ReactNode) => {
      return (
        <table className="mb-4 min-w-full divide-y divide-gray-50">
          <tbody>{children}</tbody>
        </table>
      )
    },
    [BLOCKS.TABLE_ROW]: (_node: Block | Inline, children: React.ReactNode) => {
      return <tr className="bg-slate-500">{children}</tr>
    },
    [BLOCKS.TABLE_HEADER_CELL]: (
      _node: Block | Inline,
      children: React.ReactNode,
    ) => {
      return (
        <th className="border border-slate-600 bg-blue-900 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-100">
          {children}
        </th>
      )
    },
    [BLOCKS.TABLE_CELL]: (_node: Block | Inline, children: React.ReactNode) => {
      return (
        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
          {children}
        </td>
      )
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => {
      return <strong>{text}</strong>
    },
    [MARKS.ITALIC]: (text: React.ReactNode) => {
      return <em>{text}</em>
    },
    [MARKS.UNDERLINE]: (text: React.ReactNode) => {
      return <u>{text}</u>
    },
  },
}

export default renderOptions
