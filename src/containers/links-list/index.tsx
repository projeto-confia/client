import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core'
import { RelatedLinkProps } from '@/types'

export type LinksListProps = {
  links: RelatedLinkProps[]
}

export const LinkListItem = ({ name, description, link }: RelatedLinkProps) => (
  <Paper elevation={1} variant="outlined" component="li">
    <ListItem
      button
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      divider
    >
      <ListItemText
        primary={
          <Typography variant="h5" color="primary">
            {name}
          </Typography>
        }
        secondary={
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
        }
      />
    </ListItem>
  </Paper>
)

const LinksList = ({ links }: LinksListProps) => (
  <List>
    {links.map((relatedLink) => (
      <LinkListItem key={relatedLink.link} {...relatedLink} />
    ))}
  </List>
)

export default LinksList
