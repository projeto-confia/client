import NextImage from 'next/image'
import { useMediaQuery, useTheme } from '@material-ui/core'
import { MediaProps } from '@/types'
import { resolveUrl } from '../../utils/getImageUrl'

const getImageFormat = (isUpToMd: boolean, media: MediaProps) => {
  return isUpToMd ? media.formats?.medium : media.formats?.small
}

const Image = (media: MediaProps) => {
  const theme = useTheme()
  const isUpToMd = useMediaQuery(theme.breakpoints.up('md'))
  const imageFormat = getImageFormat(isUpToMd, media)

  return imageFormat ? (
    <NextImage
      src={resolveUrl(media.url)}
      alt={media.alternativeText}
      width={imageFormat.width}
      height={imageFormat.height}
    />
  ) : (
    <img
      src={resolveUrl(media.url)}
      alt={media.alternativeText}
      width="100%"
      height="auto"
    />
  )
}

export default Image
