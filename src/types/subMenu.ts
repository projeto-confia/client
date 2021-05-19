import { PopperProps, ButtonProps } from '@material-ui/core'

import { MenuItemLinkProps } from './menuItemLink'

export type SubMenuProps = {
  name: string
  menuItemLinks: MenuItemLinkProps[]
} & Pick<PopperProps, 'placement'> &
  Pick<ButtonProps, 'color'>
