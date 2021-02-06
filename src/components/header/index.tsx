import Link from 'next/link'
import Image from 'next/image'
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core'

import NavigationMenu from '../navigation-menu'
import DrawerMenu from '../drawer-menu'
import navigation from '../../data/navigation'
import useStyles from './styled'

export type Props = {
  title?: string
  onMenuClick?: (
    event: React.KeyboardEvent | React.MouseEvent
  ) => boolean | void
}

const Header = ({ title = 'CONFIA' }: Props) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:1120px)')
  return (
    <AppBar position="fixed" className={classes.root} color="default">
      <Container maxWidth="lg">
        <Toolbar variant="regular">
          <Link href="/">
            <a className={classes.logoLink}>
              <Image
                src="/images/logo.png"
                alt="Logo do projeto CONFIA"
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
