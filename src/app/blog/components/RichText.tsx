import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  Block,
  BLOCKS,
  Document,
  Inline,
  INLINES,
  MARKS,
} from '@contentful/rich-text-types'
import Image from 'next/image'
import Link from 'next/link'

const options = {
  renderMark: {
    [MARKS.CODE]: (text: React.ReactNode) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      )
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => {
      if (
        node.content.find((item: unknown) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item as any).marks?.find(
            (mark: { type: string }) => mark.type === 'code',
          ),
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        )
      }

      return <p>{children}</p>
    },

    [INLINES.ENTRY_HYPERLINK]: (node: Block | Inline) => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link href={`/posts/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        )
      }
      return null
    },

    [INLINES.HYPERLINK]: (node: Block | Inline) => {
      const text = node.content.find(
        (item: unknown) => (item as { nodeType: string }).nodeType === 'text',
      ) as { value: string } | undefined
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {text?.value}
        </a>
      )
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height="400"
            width="100%"
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        )
      }
      return null
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      const imageUrl = node.data.target.fields.file.url.startsWith('//')
        ? `https:${node.data.target.fields.file.url}`
        : node.data.target.fields.file.url
      return (
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.title}
          />
        </div>
      )
    },
  },
}

const RichText = ({ content }: { content: Document }) => {
  return <>{documentToReactComponents(content, options)}</>
}

export default RichText
