import NextLink from 'next/link'
import {
  createStyles,
  ListItem,
  ListItemProps,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core'

export type MenuItemLinkProps = {
  onClick?: () => unknown
  href: string
  name: string
  target?: string
} & Pick<ListItemProps, 'color'>

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  })
)

const MenuItemLink = ({
  onClick = undefined,
  href,
  name,
  color,
  target = '_self',
}: MenuItemLinkProps) => {
  const classes = useStyles()

  return (
    <NextLink href={href} passHref>
      <a className={classes.link} target={target}>
        <ListItem button color={color} onClick={onClick}>
          <ListItemText primary={name} />
        </ListItem>
      </a>
    </NextLink>
  )
}

export default MenuItemLink
