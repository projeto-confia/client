import Image from 'next/image'
import { Box, useMediaQuery, useTheme } from '@material-ui/core'

import { MediaProps, MediaFormatProps } from '@/types'
import { resolveUrl } from '../../utils/getImageUrl'

const IMG_EXTS = ['.jpg', '.jpeg', '.png']

const getImageFormat = (isUpToMd: boolean, media: MediaProps) => {
  const imageFormat = isUpToMd ? media.formats?.medium : media.formats?.small

  return imageFormat || ({ width: 500, height: 300 } as MediaFormatProps)
}

const Media = (media: MediaProps) => {
  const theme = useTheme()
  const isUpToMd = useMediaQuery(theme.breakpoints.up('md'))
  const imageFormat = getImageFormat(isUpToMd, media)
  const isImage = media.ext && IMG_EXTS.includes(media.ext)

  if (!media.url) {
    return null
  }

  return isImage ? (
    <Image
      src={resolveUrl(media.url)}
      alt={media.alternativeText}
      width={imageFormat.width}
      height={imageFormat.height}
    />
  ) : (
    <Box width={750} maxWidth="100%" clone>
      <video controls>
        <source
          src={resolveUrl(media.url)}
          type={`video/${media?.ext?.replace('.', '')}`}
        />
        Desculpe, mas aparentemente seu navegador não suporta vídeos, considere
        atualiza-lo ou acessar por outro dispositivo.
      </video>
    </Box>
  )
}

export default Media
