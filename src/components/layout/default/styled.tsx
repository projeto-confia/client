import { makeStyles } from '@material-ui/core'

const toolbarMinHeight = 64

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: `calc(${theme.spacing(1)}px + ${toolbarMinHeight}px)`,
  },
}))

export default useStyles
