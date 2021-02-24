import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core'

import { SectionSubProjectsProps } from '@/types'

const SectionSubProjects = ({
  title,
  message,
  subProjects,
}: SectionSubProjectsProps) => {
  return (
    <Box component="section" p={2}>
      {title && (
        <Typography component="h1" variant="h2" gutterBottom>
          {title}
        </Typography>
      )}

      <Typography component="p" variant="subtitle1">
        {message}
      </Typography>

      <List>
        {subProjects?.map(({ title, description }) => (
          <ListItem key={title}>
            <Box p={2} component={Paper}>
              <ListItemText
                primary={
                  <Typography component="h3" variant="subtitle1" gutterBottom>
                    {title}
                  </Typography>
                }
                secondary={description}
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default SectionSubProjects
