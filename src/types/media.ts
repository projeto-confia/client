export type MediaFormat = {
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

export type MediaProps = {
  url: string
  alternativeText?: string
  ext?: string
  formats?: {
    large: MediaFormat
    small: MediaFormat
    medium: MediaFormat
    thumbnail: MediaFormat
  }
}
