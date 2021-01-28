import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      listStyle: 'none',
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
    anchor: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(2),
    },
    text: {
      marginLeft: theme.spacing(2),
    },
    wrapper: {
      marginTop: theme.spacing(2),
    },
  })
)

export default useStyles
