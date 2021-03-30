import { makeStyles } from '@material-ui/core'

const drawerWidth = 240
const toolbarMinHeight = 64

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: `calc(${theme.spacing(1)}px + ${toolbarMinHeight + 5}px)`,
    },
  },
}))

export default useStyles
