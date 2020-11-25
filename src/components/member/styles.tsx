import { makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '300px',
      height: '320px',
      padding: theme.spacing(3),
    },
    photo: {
      width: '150px',
      height: '150px',
      borderRadius: 'calc(150px / 2);',
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
