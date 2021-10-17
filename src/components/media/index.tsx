import { MediaProps } from '@/types'
import Image from './Image'
import Video from './Video'

const Media = (media: MediaProps) => {
  if (!media.url) {
    return null
  }
  const isImage = media.mime?.startsWith('image')

  return isImage ? <Image {...media} /> : <Video {...media} />
}

export default Media
