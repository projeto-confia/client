import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import useStyles from './styled'

export type Props = {
  title?: string
  children: React.ReactNode
  onMenuClick?: (
    event: React.KeyboardEvent | React.MouseEvent
  ) => boolean | void
}

const Header = ({ title = 'CONFIA', children }: Props) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.root} color="default">
      <Toolbar variant="regular" component="nav">
        <Link href="/">
          <a className={classes.logoLink}>
            <Image
              src="/images/logo.png"
              alt="Logo do projeto CONFIA"
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
    </AppBar>
  )
}

export default Header
