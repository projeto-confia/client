import NextLink from 'next/link'
import { Button, ButtonProps } from '@material-ui/core'

export type MenuItemLinkProps = {
  onClick?: () => unknown
  href: string
  name: string
} & Pick<ButtonProps, 'color'>

const MenuItemLink = ({
  onClick = undefined,
  href,
  name,
  color,
}: MenuItemLinkProps) => (
  <NextLink href={href} passHref>
    <Button style={{ display: 'block' }} color={color} onClick={onClick}>
      {name}
    </Button>
  </NextLink>
)

export default MenuItemLink
