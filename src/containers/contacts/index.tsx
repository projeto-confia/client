import { Paper, Typography, Link } from '@material-ui/core'
import { EmailOutlined } from '@material-ui/icons'

import { getSocialNetworkIcon } from '../../utils/getSocialNetworkIcon'
import { ContactPageProps } from '@/types'
import useStyles from './styled'
import React from 'react'

export type ContactListItemProps = {
  icon: React.ReactNode
  url: string
  text?: string
  children?: React.ReactNode
}

export const ContactListItem = ({
  icon,
  url,
  text,
  children,
}: ContactListItemProps) => {
  const classes = useStyles()
  return (
    <li key={url}>
      <Link href={url} className={classes.anchor}>
        {icon}
        <Typography
          component="p"
          variant="h5"
          color="primary"
          className={classes.text}
        >
          {children || text}
        </Typography>
      </Link>
    </li>
  )
}

const Contacts = ({
  email,
  socialNetworkLinks,
}: Pick<ContactPageProps, 'email' | 'socialNetworkLinks'>) => {
  const classes = useStyles()
  const [emailName, domain] = email.split('@')

  return (
    <Paper elevation={0} variant="outlined" className={classes.wrapper}>
      <ul className={classes.ul}>
        <ContactListItem icon={<EmailOutlined />} url={`mailto:${email}`}>
          {emailName}
          <wbr></wbr>@{domain}
        </ContactListItem>

        {socialNetworkLinks?.map(({ socialNetwork, url }) => (
          <ContactListItem
            key={url}
            icon={getSocialNetworkIcon(socialNetwork)}
            url={url}
            text={socialNetwork}
          />
        ))}
      </ul>
    </Paper>
  )
}

export default Contacts
