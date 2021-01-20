import { Box } from '@material-ui/core'

import { Contributor } from '@/components'
import { ContributorProps } from '../../types/contributor'

export type ContributorsGridProps = {
  contributors: ContributorProps[]
}

const ContributorsGrid = ({ contributors }: ContributorsGridProps) => (
  <Box
    component="ul"
    display="grid"
    gridTemplateColumns="repeat(auto-fill, minmax(250px, 2fr))"
    justifyItems="center"
    gridGap={10}
    padding={0}
    marginTop={2}
  >
    {contributors.map((contributor) => (
      <Contributor key={contributor.id} {...contributor} />
    ))}
  </Box>
)

export default ContributorsGrid
