import { CommonPageDataProps } from './commonPageData'
import { PublicationProps } from './publication'

export type publicationsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  publications: PublicationProps[]
}
