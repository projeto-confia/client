import { Box, Typography } from '@material-ui/core'

import { SectionTeamProps } from '@/types'
import { Member } from '@/components'

const SectionTeam = ({ title, members }: SectionTeamProps) => (
  <Box component="section" p={2}>
    <Typography component="h2" variant="h2">
      {title}
    </Typography>
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      justifyItems="center"
      gridGap="10px"
      marginTop={2}
    >
      {members.map((member) => (
        <Member key={`${member.name}${member.role}`} {...member} />
      ))}
    </Box>
  </Box>
)

export default SectionTeam
