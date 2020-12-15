import React, { useState } from 'react'
import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons'

import MenuItemLink from '../menu-item-link'
import { NavigationMenuItemProps } from '../navigation-menu'
import SideBarSubMenu from '../sidebar-submenu'

export type DrawerMenuProps = {
  anchor?: 'bottom' | 'right'
  menuItens: NavigationMenuItemProps[]
}

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      minWidth: 250,
    },
  })
)

const DrawerMenu = ({ anchor = 'right', menuItens }: DrawerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles()

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <div className={classes.list} role="presentation">
          <List>
            <ListItem button onClick={() => setIsOpen(false)}>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Fechar" />
            </ListItem>
            <Divider />

            {menuItens.map((item) =>
              item.menuItemLinks?.length ? (
                <SideBarSubMenu
                  key={item.href}
                  name={item.name}
                  items={item.menuItemLinks}
                />
              ) : (
                <MenuItemLink key={item.href} {...item} />
              )
            )}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  )
}

export default DrawerMenu
