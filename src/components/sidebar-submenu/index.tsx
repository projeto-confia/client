import { useState } from 'react'
import {
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  List,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

import MenuItemLink, { MenuItemLinkProps } from '../menu-item-link'

export type SideBarSubMenuProps = {
  name: string
  items: MenuItemLinkProps[]
}

const SideBarSubMenu = ({ name, items }: SideBarSubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Divider />
        <List component="ul" disablePadding>
          {items.map((item) => (
            <MenuItemLink {...item} key={item.href} />
          ))}
        </List>
        <Divider />
      </Collapse>
    </>
  )
}

export default SideBarSubMenu
