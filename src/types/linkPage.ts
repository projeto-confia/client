import { CommonPageDataProps } from './commonPageData'
import { RelatedLinkProps } from './relatedLink'

export type LinkPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  relatedLinks: RelatedLinkProps[]
}
