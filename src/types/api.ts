import { ImageProps } from './image'
import { Nullable } from './nullable'
import { SocialNetworkType } from './socialNetwork'

export type ButtonLinkProps = {
  label: string
  url: string
}

export type LandingPageHeaderProps = {
  title: string
  description: string
  button: ButtonLinkProps
  image: ImageProps
}

export type ProcessStepProps = {
  label: string
  description: string
  icon: ImageProps
}

export type SectionHowWorksProps = {
  title: string
  processSteps: ProcessStepProps[]
}

export type SectionAboutProps = {
  title: string
  subtitle: string
  description: string
  image: ImageProps
}

export type SponsorProps = {
  name: string
  logo: ImageProps
}

export type SectionSponsorsProps = {
  title: string
  sponsors: SponsorProps[]
}

export type SocialNetworkLinkProps = {
  socialNetwork: SocialNetworkType
  url: string
}

export type MemberProps = {
  name: string
  role: string
  photo: ImageProps
  socialNetworkLinks: Nullable<SocialNetworkLinkProps[]>
}

export type SectionTeamProps = {
  title: string
  members: MemberProps[]
}

export type StatisticDataProps = {
  title: string
  subtitle: string
  count: number
}

export type SectionStatisticsProps = {
  statisticDatas: StatisticDataProps[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: LandingPageHeaderProps
  sectionStatistics: SectionStatisticsProps
  sectionHowWorks: SectionHowWorksProps
  sectionAbout: SectionAboutProps
  sectionSponsors: SectionSponsorsProps
  sectionTeam: SectionTeamProps
}
