import { CommonPageDataProps } from './commonPageData'
import { PublicationProps } from './publication'

export type PublicationsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  publications: PublicationProps[]
}
