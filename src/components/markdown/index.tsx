import { markdownToHtml } from '../../utils/markdownToHtml'

export type MarkdownProps = {
  content: string
}

const Markdown = ({ content }: MarkdownProps) => (
  <div
    className="md"
    dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
  />
)

export default Markdown
