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
}: SponsorProps) => {
  const theme = useTheme()
  const isUpToSm = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box
      component="li"
      display="flex"
      flexDirection={isUpToSm ? 'row' : 'column'}
      gridGap={theme.spacing(1)}
      alignItems="center"
      title={name}
      m={2}
    >
      <Box
        order={2}
        maxWidth={300}
        textAlign={isUpToSm ? 'left' : 'center'}
        clone
      >
        <Typography>{name}</Typography>
      </Box>

      <Image
        src={getImageUrl(url)}
        alt={alternativeText}
        width={50}
        height={50}
        loading="lazy"
      />
    </Box>
  )
}

const SectionSponsors = ({ title, sponsors }: SectionSponsorsProps) => {
  const theme = useTheme()
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
      <Typography component="h2" variant="h2">
        {title}
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={getGridTemplateColumns()}
        p={2}
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
