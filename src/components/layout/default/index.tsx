import { useState } from 'react'
import {
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import Header from '../../header'
import DrawerMenu from '../../drawer-menu'
import useStyles from './styled'

export type LayoutDefaultProps = {
  children: NonNullable<React.ReactNode>
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => setIsOpen(!isOpen)
  const closeDrawer = () => setIsOpen(false)

  return (
    <div className={classes.root}>
      <Header>
        {!isDesktop && (
          <IconButton edge="start" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
      </Header>

      <DrawerMenu
        isOpen={isOpen}
        onClose={closeDrawer}
        onClickClose={closeDrawer}
      />

      <Container maxWidth="lg" component="main" className={classes.content}>
        {children}
      </Container>
    </div>
  )
}

export default LayoutDefault
