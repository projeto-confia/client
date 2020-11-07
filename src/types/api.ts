export type ButtonLinkProps = {
  label: string
  url: string
}

export type ImageProps = {
  url: string
  alternativeText: string
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

export type LandingPageProps = {
  logo: ImageProps
  header: LandingPageHeaderProps
  sectionHowWorks: SectionHowWorksProps
  sectionAbout: SectionAboutProps
}
