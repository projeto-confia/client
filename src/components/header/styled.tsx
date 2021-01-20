import { makeStyles, createStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: `${theme.spacing(1)}px 0`,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: '.5rem',
    },
    content: {
      marginLeft: 'auto',
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  })
)

export default useStyles
