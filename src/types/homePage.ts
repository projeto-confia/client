import { CommonPageDataProps } from './commonPageData'
import { SectionHeroProps } from './sectionHero'
import { SectionOverviewProps } from './sectionOverview'
import { SectionStatisticsProps } from './sectionStatistics'
import { SectionSubProjectsProps } from './sectionSubProjects'

export type HomePageProps = {
  commonPageData: CommonPageDataProps
  sectionHero: SectionHeroProps
  sectionStatistics: SectionStatisticsProps
  sectionOverview: SectionOverviewProps
  sectionSubProjects: SectionSubProjectsProps
}
