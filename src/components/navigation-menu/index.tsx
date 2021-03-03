import { Box, ListItem } from '@material-ui/core'

import { MenuItemLink, SubMenu } from '@/components'
import { MenuItemLinkProps } from '../menu-item-link'
import { SubMenuProps } from '../sub-menu'

export type NavigationMenuItemProps = MenuItemLinkProps & SubMenuProps
export type NavigationMenuProps = {
  menuItens?: NavigationMenuItemProps[]
}

const NavigationMenu = ({ menuItens }: NavigationMenuProps) => {
  return (
    <Box display="flex" flexDirection="row" component="ul" m={0} p={0}>
      {menuItens?.map((item) => (
        <ListItem disableGutters key={item.name}>
          {item.menuItemLinks?.length ? (
            <SubMenu {...item} />
          ) : (
            <MenuItemLink {...item} />
          )}
        </ListItem>
      ))}
    </Box>
  )
}

export default NavigationMenu
