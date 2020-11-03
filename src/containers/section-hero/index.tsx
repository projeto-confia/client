import {
  Box,
  Typography,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'

import { LandingPageHeaderProps } from '@/types'
import { getImageUrl } from 'src/utils/getImageUrl'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: theme.breakpoints.width('md'),
      margin: '0 auto',
      padding: `0 ${theme.spacing(4)}px`,
    },
    image: {
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
  button: { label },
  image: { url, alternativeText },
}: LandingPageHeaderProps) => {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.box}>
      <div>
        <Typography component="h1" variant="h1">
          {title}
        </Typography>
        <Typography component="h2" variant="subtitle1">
          {description}
        </Typography>
        <Button variant="contained" color="primary" className={classes.cta}>
          {label}
        </Button>
      </div>
      <img
        className={classes.image}
        src={getImageUrl(url)}
        alt={alternativeText}
      />
    </Box>
  )
}

export default SectionHero
