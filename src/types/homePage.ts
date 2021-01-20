import { CommonPageDataProps } from './commonPageData'
import { SectionHeroProps } from './sectionHero'
import { SectionOverview } from './sectionOverview'
import { SectionStatisticsProps } from './sectionStatistics'

export type HomePageProps = {
  commonPageData: CommonPageDataProps
  sectionHero: SectionHeroProps
  sectionStatistics: SectionStatisticsProps
  sectionOverview: SectionOverview
}
