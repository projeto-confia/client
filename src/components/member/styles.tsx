import { makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '300px',
      height: '300px',
      padding: theme.spacing(3),
    },
    photo: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
    },
    socialNetworksList: {
      display: 'flex',
      alignItems: 'center',
      padding: 0,
    },
    socialNetwork: {
      color: theme.palette.grey[800],
      margin: theme.spacing(1),
    },
  })
)

export default useStyles
