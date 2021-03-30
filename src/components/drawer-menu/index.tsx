import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

import SideBarSubMenu from '../sidebar-submenu'
import MenuItemLink from '../menu-item-link'
import navigation from '../../data/navigation'
import useStyles from './styled'

export type Props = {
  isOpen: boolean
  onClickClose: () => void
  onClose: () => void
}

const DrawerMenu = ({ isOpen, onClose, onClickClose }: Props) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const classes = useStyles()

  return (
    <Drawer
      anchor={isDesktop ? 'left' : 'right'}
      variant={isDesktop ? 'permanent' : undefined}
      open={isOpen}
      onClose={onClose}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <List>
          {!isDesktop && (
            <>
              <ListItem button onClick={onClickClose}>
                <ListItemIcon>
                  <CloseIcon />
                </ListItemIcon>
                <ListItemText primary="Fechar" />
              </ListItem>
              <Divider />
            </>
          )}

          {navigation.map((item) =>
            item.menuItemLinks?.length ? (
              <SideBarSubMenu
                key={item.name}
                name={item.name}
                items={item.menuItemLinks}
              />
            ) : (
              <MenuItemLink key={item.name} {...item} />
            )
          )}
        </List>
      </div>
    </Drawer>
  )
}

export default DrawerMenu
