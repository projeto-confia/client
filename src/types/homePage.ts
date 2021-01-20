import { CommonPageDataProps } from './commonPageData'
import { SectionHeroProps } from './sectionHero'
import { SectionOverviewProps } from './sectionOverview'
import { SectionStatisticsProps } from './sectionStatistics'

export type HomePageProps = {
  commonPageData: CommonPageDataProps
  sectionHero: SectionHeroProps
  sectionStatistics: SectionStatisticsProps
  sectionOverview: SectionOverviewProps
}
