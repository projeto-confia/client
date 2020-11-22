import { Box, Typography } from '@material-ui/core'

import { SectionTeamProps } from '@/types'

const SectionTeam = ({ title }: SectionTeamProps) => (
  <Box component="section" p={2}>
    <Typography component="h2" variant="h2">
      {title}
    </Typography>
  </Box>
)

export default SectionTeam
