import DOMPurify from 'isomorphic-dompurify'
import marked from 'marked'

export const markdownToHtml = (md: string): string =>
  DOMPurify.sanitize(marked(md, { sanitize: false }), {
    ADD_TAGS: ['iframe'],
  })
