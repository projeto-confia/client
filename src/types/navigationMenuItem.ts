import { MenuItemLinkProps } from './menuItemLink'
import { SubMenuProps } from './subMenu'

export type NavigationMenuItemProps = MenuItemLinkProps & SubMenuProps
export type NavigationMenuProps = {
  menuItens?: NavigationMenuItemProps[]
}
