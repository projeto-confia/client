import Image from 'next/image'
import { Box, Paper, Typography } from '@material-ui/core'
import { Facebook, GitHub, LinkedIn, Group } from '@material-ui/icons'

import { SocialNetworkType } from '@/types'
import { MemberProps } from '../../types/member'
import { getImageUrl } from '../../utils/getImageUrl'
import useStyles from './styles'

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

const Member = ({ name, role, photo, socialNetworkLinks }: MemberProps) => {
  const classes = useStyles()
  return (
    <Paper elevation={1} component="article" className={classes.wrapper}>
      <Image
        src={getImageUrl(photo.url)}
        alt={photo.alternativeText}
        width={150}
        height={150}
        loading="lazy"
        className={classes.photo}
      />
      <Typography component="h3" variant="subtitle1" align="center">
        {name}
      </Typography>
      <Typography align="center" color="primary">
        {role}
      </Typography>
      <ul className={classes.socialNetworksList}>
        {socialNetworkLinks?.map(({ socialNetwork, url }) => (
          <a
            key={url}
            href={url}
            target="blank"
            rel="nofollow"
            className={classes.socialNetwork}
            aria-label={`Link para ${socialNetwork}.`}
          >
            {getSocialNetworkIcon(socialNetwork)}
          </a>
        ))}
      </ul>
    </Paper>
  )
}

export default Member
