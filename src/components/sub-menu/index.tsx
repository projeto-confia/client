import { useState, useRef, useEffect } from 'react'
import {
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  PopperProps,
  ButtonProps,
  Button,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

import MenuItemLink, { MenuItemLinkProps } from '../menu-item-link'

export type SubMenuProps = {
  name: string
  menuItemLinks: MenuItemLinkProps[]
} & Pick<PopperProps, 'placement'> &
  Pick<ButtonProps, 'color'>

const SubMenu = ({ name, menuItemLinks, placement }: SubMenuProps) => {
  const [open, setOpen] = useState(false)
  const prevOpen = useRef(open)
  const anchorRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus()
    }

    prevOpen.current = open
  }, [open])

  const handleToggle = () => setOpen((previousOpen) => !previousOpen)

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      (event.target as HTMLElement)?.classList?.contains('submenu-icon') ||
      anchorRef?.current?.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list' : undefined}
        aria-haspopup="true"
        style={{ textTransform: 'none', fontSize: '1rem', fontWeight: 400 }}
        onClick={handleToggle}
        endIcon={
          open ? (
            <ExpandLess className="submenu-icon" />
          ) : (
            <ExpandMore className="submenu-icon" />
          )
        }
      >
        {name}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement={placement}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="menu-list"
                  autoFocusItem={open}
                  onKeyDown={handleListKeyDown}
                >
                  {menuItemLinks.map((props) => (
                    <MenuItemLink key={props.href} {...props} />
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default SubMenu
