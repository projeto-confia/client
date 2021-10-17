import { Box } from '@material-ui/core'

import { resolveUrl } from '../../utils/getImageUrl'
import { MediaProps } from '@/types'

const Video = (media: MediaProps) => (
  <Box maxWidth="100%" clone>
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

export default Video
