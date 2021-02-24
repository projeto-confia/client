import { Box, Typography } from '@material-ui/core'

import { SectionOverviewProps } from '@/types'

const SectionOverview = ({ title, description }: SectionOverviewProps) => (
  <Box component="section" p={2}>
    <Typography component="h1" variant="h2" gutterBottom>
      {title}
    </Typography>
    <Typography component="p" variant="subtitle1">
      {description}
    </Typography>
  </Box>
)

export default SectionOverview
