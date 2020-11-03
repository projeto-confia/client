import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import { ImageProps } from '../../types/api'
import { getImageUrl } from '../../utils/getImageUrl'

export type Props = {
  title: string
  image: ImageProps
  showMenuButton?: boolean
  onMenuClick?: (
    event: React.KeyboardEvent | React.MouseEvent
  ) => boolean | void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      width: '3rem',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: '.5rem',
    },
  })
)

const Header = ({
  title = 'confia',
  image: { url, alternativeText },
  onMenuClick,
  showMenuButton = true,
}: Props) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root} color="default">
      <Toolbar variant="regular">
        {showMenuButton && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        )}

        <img
          className={classes.logo}
          src={getImageUrl(url)}
          alt={alternativeText}
        />
        <Typography variant="h4" component="h1" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
