import NextLink from 'next/link'
import {
  createStyles,
  ListItem,
  ListItemProps,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { useRouter } from 'next/router'

export type MenuItemLinkProps = {
  onClick?: () => unknown
  href: string
  name: string
  target?: string
} & Pick<ListItemProps, 'color'>

const useStyles = (isActive = false) =>
  makeStyles((theme: Theme) =>
    createStyles({
      link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
      },
      active: {
        borderBottom: isActive
          ? `2px solid ${theme.palette.secondary.main}`
          : '',
      },
    })
  )()

const MenuItemLink = ({
  onClick = undefined,
  href,
  name,
  color,
  target = '_self',
}: MenuItemLinkProps) => {
  const router = useRouter()
  const classes = useStyles(router.asPath === href)

  return (
    <NextLink href={href} passHref>
      <a className={classes.link} target={target}>
        <ListItem
          className={classes.active}
          button
          color={color}
          onClick={onClick}
        >
          <ListItemText primary={name} />
        </ListItem>
      </a>
    </NextLink>
  )
}

export default MenuItemLink
