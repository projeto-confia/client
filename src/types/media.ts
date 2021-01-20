export type MediaFormatProps = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: string
  size: number
  width: number
  height: number
}

export type MediaFormatsProps = {
  large: MediaFormatProps
  small: MediaFormatProps
  medium: MediaFormatProps
  thumbnail: MediaFormatProps
}

export type MediaProps = {
  url: string
  alternativeText?: string
  ext?: string
  formats?: MediaFormatsProps
}
