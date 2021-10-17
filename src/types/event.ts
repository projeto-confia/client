import { CommonPageDataProps } from './commonPageData'
import { MediaProps } from './media'

export type EventProps = {
  commonPageData: CommonPageDataProps
  slug: string
  title: string
  subtitle?: string
  media: MediaProps
  content: string
}
