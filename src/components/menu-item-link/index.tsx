import MenuItem from '@material-ui/core/MenuItem'
import Link, { LinkProps } from '@material-ui/core/Link'
import NextLink from 'next/link'

export type MenuItemLinkProps = {
  onClick: () => unknown
  href: string
  name: string
} & Pick<LinkProps, 'color'>

const MenuItemLink = ({ onClick, href, name, color }: MenuItemLinkProps) => (
  <NextLink href={href} passHref>
    <Link variant="button" color={color}>
      <MenuItem component="a" onClick={onClick}>
        {name}
      </MenuItem>
    </Link>
  </NextLink>
)

export default MenuItemLink
