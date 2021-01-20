import { Grid, Box } from '@material-ui/core'

import { SectionStatisticsProps } from '@/types'
import { StatisticDataCountCard } from '@/components'

const SectionStatistics = ({ statisticData }: SectionStatisticsProps) => (
  <Box p={2} clone>
    <Grid component="section" container justify="center" spacing={2}>
      {statisticData?.map((data) => (
        <Grid item key={data.title} xs={12} sm>
          <StatisticDataCountCard {...data} />
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default SectionStatistics
