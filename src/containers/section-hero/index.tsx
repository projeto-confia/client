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
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 auto',
      padding: `${theme.spacing(4)}px`,
    },
    image: {
      position: 'absolute',
      width: '50%',
      top: -10,
      right: 0,
      zIndex: -1,
      opacity: 0.1,
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
    <Box component="section" className={classes.box}>
      <div>
        <Typography component="h1" variant="h1">
          {title}
        </Typography>
        <Typography component="h2" variant="subtitle1">
          {description}
        </Typography>
      </div>
      <img
        className={isWidthUpToSm ? classes.imageSm : classes.image}
        src={getImageUrl(url)}
        alt={alternativeText}
      />
    </Box>
  )
}

export default SectionHero
