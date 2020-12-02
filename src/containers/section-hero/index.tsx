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
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `${theme.spacing(2)}px`,
    },
    image: {
      display: 'none',
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
