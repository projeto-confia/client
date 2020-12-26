import { CommonPageDataProps } from './commonPageData'
import { MemberProps } from './member'

export type ContributorsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  members: MemberProps[]
}
