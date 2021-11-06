import Img from 'next/image'
import Box from '@material-ui/core/Box'
import { MediaProps } from '@/types'
import Image from './Image'
import Video from './Video'

const Media = (media: MediaProps) => {
  if (!media.url) {
    return (
      <Box display="flex" justifyContent="center">
        <Img
          src="/images/logo.png"
          alt="Logo do projeto CONFIA"
          width={150}
          height={150}
        />
      </Box>
    )
  }
  const isImage = media.mime?.startsWith('image')

  return isImage ? <Image {...media} /> : <Video {...media} />
}

export default Media
