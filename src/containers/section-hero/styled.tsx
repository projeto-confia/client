import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `${theme.spacing(2)}px`,
    },
  })
)

export default useStyles
