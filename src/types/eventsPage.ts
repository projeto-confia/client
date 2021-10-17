import { CommonPageDataProps } from './commonPageData'
import { EventProps } from './event'

export type EventsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  events: EventProps[]
}
