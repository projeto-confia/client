import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { ProcessStepProps } from '@/types'
import { getImageUrl } from '../../utils/getImageUrl'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 'fit-content',
    },
    header: {
      position: 'relative',
      minWidth: '100px',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        width: '100%',
        zIndex: -1,
        borderTop: `3px solid ${theme.palette.secondary.light}`,
      },
    },
    label: {
      backgroundColor: theme.palette.background.default,
      width: 'fit-content',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      padding: `${theme.spacing(2)}px`,
    },
    image: {
      display: 'block',
      width: '50px',
      marginRight: `${theme.spacing(2)}px`,
    },
  })
)

const ProcessStep = ({ label, icon, description }: ProcessStepProps) => {
  const classes = useStyles()

  return (
    <Box component="article" className={classes.wrapper}>
      <header className={classes.header}>
        <Typography className={classes.label} component="h2" variant="body1">
          {label}
        </Typography>
      </header>

      <Box className={classes.content} component="div">
        <img
          className={classes.image}
          src={getImageUrl(icon.url)}
          alt={icon.alternativeText}
        />
        <Typography>{description}</Typography>
      </Box>
    </Box>
  )
}

export default ProcessStep
