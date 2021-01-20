import { Box, Typography } from '@material-ui/core'

import { SectionHeroProps } from 'src/types/sectionHero'
import useStyles from './styled'

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
