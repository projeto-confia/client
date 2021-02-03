import { CommonPageDataProps } from './commonPageData'
import { VideoCardProps } from './videoCard'

export type EventsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  videoCards: VideoCardProps[]
}
