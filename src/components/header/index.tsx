import Image from 'next/image'
import {
  makeStyles,
  createStyles,
  Theme,
  Container,
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
    <AppBar position="fixed" className={classes.root} color="default">
      <Container maxWidth="lg">
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
          <Image
            src={getImageUrl(url)}
            alt={alternativeText}
            width={50}
            height={50}
            loading="eager"
          />
          <Typography variant="h4" component="h1" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
