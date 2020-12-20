import Link from 'next/link'
import Image from 'next/image'
import {
  makeStyles,
  createStyles,
  Theme,
  Container,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core'

import NavigationMenu from '../navigation-menu'
import DrawerMenu from '../drawer-menu'
import { ImageProps } from '../../types/api'
import { getImageUrl } from '../../utils/getImageUrl'
import navigation from '../../data/navigation'

export type Props = {
  title: string
  image: ImageProps
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

const Header = ({
  title = 'confia',
  image: { url, alternativeText },
}: Props) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:1120px)')
  return (
    <AppBar position="fixed" className={classes.root} color="default">
      <Container maxWidth="lg">
        <Toolbar variant="regular">
          <Link href="/">
            <a className={classes.logoLink}>
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
            </a>
          </Link>
          <div className={classes.content}>
            {isDesktop ? (
              <NavigationMenu menuItens={navigation} />
            ) : (
              <DrawerMenu menuItens={navigation} />
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
