import { CommonPageDataProps } from './commonPageData'
import { SocialNetworkLinkProps } from './socialNetworkLink'

export type ContactPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  email: string
  socialNetworkLinks: SocialNetworkLinkProps[]
}
