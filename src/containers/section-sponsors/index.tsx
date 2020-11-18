import Image from 'next/image'
import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

import { SectionSponsorsProps, SponsorProps } from '@/types'
import { getImageUrl } from 'src/utils/getImageUrl'

export const Sponsor = ({
  name,
  logo: { url, alternativeText },
}: SponsorProps) => (
  <Box
    component="li"
    display="flex"
    flexDirection="row"
    alignItems="center"
    m={2}
  >
    <Typography style={{ order: 2, marginLeft: '1rem' }}>{name}</Typography>
    <Image
      src={getImageUrl(url)}
      alt={alternativeText}
      width={100}
      height={100}
      loading="lazy"
    />
  </Box>
)

const SectionSponsors = ({ title, sponsors }: SectionSponsorsProps) => {
  const theme = useTheme()
  const isUpToSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isUpToMd = useMediaQuery(theme.breakpoints.up('md'))
  const isUpToLg = useMediaQuery(theme.breakpoints.up('lg'))

  const getGridTemplateColumns = () => {
    return [isUpToLg, isUpToMd].reduce(
      (template, mediaQuery) => (mediaQuery ? `${template} 1fr` : template),
      '1fr'
    )
  }

  return (
    <Box component="section" p={2}>
      <Typography component="h1" variant={isUpToSm ? 'h1' : 'h2'}>
        {title}
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={getGridTemplateColumns()}
        p={3}
        clone
      >
        <Paper elevation={1} component="ul">
          {sponsors.map((sponsor) => (
            <Sponsor {...sponsor} key={sponsor.name} />
          ))}
        </Paper>
      </Box>
    </Box>
  )
}

export default SectionSponsors
