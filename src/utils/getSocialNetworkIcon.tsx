import Box from '@material-ui/core/Box'
import { Facebook, GitHub, LinkedIn, Group } from '@material-ui/icons'
import { SocialNetworkType } from 'src/types/socialNetwork'

const LattesIcon = () => (
  <Box width="1.2rem" clone>
    <img src="/images/lattes.png" alt="Link para curríbulo lattes" />
  </Box>
)

const SocialMediaIconMap = new Map<SocialNetworkType, JSX.Element>()
  .set('Facebook', <Facebook />)
  .set('GitHub', <GitHub />)
  .set('LinkedIn', <LinkedIn />)
  .set('Lattes', <LattesIcon />)

export const getSocialNetworkIcon = (key: SocialNetworkType | string) =>
  SocialMediaIconMap.get(key as SocialNetworkType) || <Group />
