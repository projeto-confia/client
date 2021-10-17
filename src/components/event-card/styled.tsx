import { makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      maxWidth: 500,
      margin: '0 auto',
    },
  })
)

export default useStyles
