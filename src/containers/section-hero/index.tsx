import Image from 'next/image'
import {
  Box,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'

import { LandingPageHeaderProps } from '@/types'
import { getImageUrl } from 'src/utils/getImageUrl'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `${theme.spacing(2)}px`,
    },
    image: {
      width: '200px',
      margin: '-20px auto 0',
    },
    imageSm: {
      width: '50%',
    },
    cta: {
      marginTop: `${theme.spacing(4)}px`,
    },
  })
)

const SectionHero = ({
  title,
  description,
  image: { url, alternativeText },
}: LandingPageHeaderProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isWidthUpToSm = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box
      component="section"
      className={classes.box}
      flexDirection={isWidthUpToSm ? 'row' : 'column'}
    >
      <Box>
        <Typography component="h1" variant="h1">
          {title}
        </Typography>
        <Typography component="h2" variant="subtitle1">
          {description}
        </Typography>
      </Box>
      <Image
        className={isWidthUpToSm ? classes.imageSm : classes.image}
        src={getImageUrl(url)}
        alt={alternativeText}
        width={400}
        height={400}
        loading="eager"
      />
    </Box>
  )
}

export default SectionHero
