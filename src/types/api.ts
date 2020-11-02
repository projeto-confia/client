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

export type LandingPageProps = {
  header: LandingPageHeaderProps
}
