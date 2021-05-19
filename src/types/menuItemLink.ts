import { ListItemProps } from '@material-ui/core'

export type MenuItemLinkProps = {
  onClick?: () => unknown
  href: string
  name: string
  target?: string
} & Pick<ListItemProps, 'color'>
