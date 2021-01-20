import { CommonPageDataProps } from './commonPageData'
import { ContributorProps } from './contributor'

export type ContributorsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  members: ContributorProps[]
}
