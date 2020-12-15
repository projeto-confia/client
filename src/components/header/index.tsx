import Link from 'next/link'
import Image from 'next/image'
import {
  makeStyles,
  createStyles,
  Theme,
  Container,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

import { ImageProps } from '../../types/api'
import { getImageUrl } from '../../utils/getImageUrl'

export type Props = {
  title: string
  image: ImageProps
  onMenuClick?: (
    event: React.KeyboardEvent | React.MouseEvent
  ) => boolean | void
  children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: '.5rem',
    },
    content: {
      marginLeft: 'auto',
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  })
)

const Header = ({
  title = 'confia',
  image: { url, alternativeText },
  children,
}: Props) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.root} color="default">
      <Container maxWidth="lg">
        <Toolbar variant="regular">
          <Link href="/">
            <a className={classes.logoLink}>
              <Image
                src={getImageUrl(url)}
                alt={alternativeText}
                width={50}
                height={50}
                loading="eager"
              />

              <Typography variant="h4" component="h1" className={classes.title}>
                {title}
              </Typography>
            </a>
          </Link>
          <div className={classes.content}>{children}</div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
