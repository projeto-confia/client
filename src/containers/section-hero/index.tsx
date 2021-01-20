import {
  Box,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'

import { SectionHeroProps } from 'src/types/sectionHero'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `${theme.spacing(2)}px`,
      maxWidth: `${theme.breakpoints.width('md')}px`,
    },
  })
)

const SectionHero = ({ title, description }: SectionHeroProps) => {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.box}>
      <Typography component="h1" variant="h1">
        {title}
      </Typography>
      <Typography component="h2" variant="subtitle1">
        {description}
      </Typography>
    </Box>
  )
}

export default SectionHero
