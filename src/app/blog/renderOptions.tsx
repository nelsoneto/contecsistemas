import { Block, BLOCKS, MARKS } from '@contentful/rich-text-types'
import Image from 'next/image'

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => {
      return <p className="mb-4">{children}</p>
    },
    [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => {
      return <h1 className="mb-4 text-4xl font-bold">{children}</h1>
    },
    [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => {
      return <h2 className="mb-4 text-3xl font-bold">{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node: Block, children: React.ReactNode) => {
      return <h3 className="mb-4 text-2xl font-bold">{children}</h3>
    },
    [BLOCKS.HEADING_4]: (node: Block, children: React.ReactNode) => {
      return <h4 className="mb-4 text-xl font-bold">{children}</h4>
    },
    [BLOCKS.HEADING_5]: (node: Block, children: React.ReactNode) => {
      return <h5 className="mb-4 text-lg font-bold">{children}</h5>
    },
    [BLOCKS.HEADING_6]: (node: Block, children: React.ReactNode) => {
      return <h6 className="mb-4 text-base font-bold">{children}</h6>
    },
    [BLOCKS.UL_LIST]: (node: Block, children: React.ReactNode) => {
      return <ul className="mb-4 list-disc pl-5">{children}</ul>
    },
    [BLOCKS.OL_LIST]: (node: Block, children: React.ReactNode) => {
      return <ol className="mb-4 list-decimal pl-5">{children}</ol>
    },
    [BLOCKS.LIST_ITEM]: (node: Block, children: React.ReactNode) => {
      return <li className="mb-2">{children}</li>
    },
    [BLOCKS.QUOTE]: (node: Block, children: React.ReactNode) => {
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
    [BLOCKS.TABLE]: (node: Block, children: React.ReactNode) => {
      return (
        <table className="mb-4 min-w-full divide-y divide-gray-50">
          <tbody>{children}</tbody>
        </table>
      )
    },
    [BLOCKS.TABLE_ROW]: (node: Block, children: React.ReactNode) => {
      return <tr className="bg-slate-300">{children}</tr>
    },
    [BLOCKS.TABLE_HEADER_CELL]: (node: Block, children: React.ReactNode) => {
      return (
        <th className="border border-slate-600 bg-slate-700 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-100">
          {children}
        </th>
      )
    },
    [BLOCKS.TABLE_CELL]: (node: Block, children: React.ReactNode) => {
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
