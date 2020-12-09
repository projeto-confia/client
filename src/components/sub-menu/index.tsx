import { useState, useRef, useEffect } from 'react'
import {
  Box,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  PopperProps,
  ButtonProps,
} from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import MenuItemLink, { MenuItemLinkProps } from '../menu-item-link'

export type SubMenuProps = {
  name: string
  menuItemLinks: MenuItemLinkProps[]
} & Pick<PopperProps, 'placement'> &
  Pick<ButtonProps, 'color'>

const SubMenu = ({ name, menuItemLinks, placement, color }: SubMenuProps) => {
  const [open, setOpen] = useState(false)
  const prevOpen = useRef(open)
  const anchorRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus()
    }

    prevOpen.current = open
  }, [open])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef?.current?.contains(event.target as HTMLElement)) {
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
    <Box>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list' : undefined}
          aria-haspopup="true"
          color={color}
          onClick={handleToggle}
        >
          {name}
          {open ? (
            <ArrowDropUp onClick={handleToggle} />
          ) : (
            <ArrowDropDown onClick={handleToggle} />
          )}
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
      </div>
    </Box>
  )
}

export default SubMenu
