import { Box } from '@material-ui/core'

import { MenuItemLink, SubMenu } from '@/components'
import { MenuItemLinkProps } from '../menu-item-link'
import { SubMenuProps } from '../sub-menu'

export type NavigationMenuItemProps = MenuItemLinkProps & SubMenuProps
export type NavigationMenuProps = {
  menuItens?: NavigationMenuItemProps[]
}

const NavigationMenu = ({ menuItens }: NavigationMenuProps) => {
  return (
    <nav>
      <Box display="flex" flexDirection="row">
        {menuItens?.map((item) =>
          item.menuItemLinks?.length ? (
            <SubMenu key={item.name} {...item} />
          ) : (
            <MenuItemLink key={item.name} {...item} />
          )
        )}
      </Box>
    </nav>
  )
}

export default NavigationMenu
