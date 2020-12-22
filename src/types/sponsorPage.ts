import { CommonPageDataProps } from './commonPageData'
import { ImageProps } from './image'

export type SponsorProps = {
  name: string
  description?: string
  link: string
  logo: ImageProps
}
export type SponsorsPageProps = {
  commonPageData: CommonPageDataProps
  title: string
  sponsors: SponsorProps[]
}
