import { makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: `${theme.spacing(1)}px`,
      width: '100%',
      maxWidth: '300px',
      height: '340px',
      padding: theme.spacing(2),
    },
    photo: {
      borderRadius: 'calc(150px / 2);',
    },
    socialNetworksList: {
      display: 'flex',
      alignItems: 'center',
      padding: 0,
    },
    socialNetwork: {
      color: theme.palette.grey[900],
      margin: theme.spacing(1),
    },
  })
)

export default useStyles
