import { CommonPageDataProps } from './commonPageData'
import { InstitutionProps } from './institution'

export type InstitutionsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  institutions: InstitutionProps[]
}
