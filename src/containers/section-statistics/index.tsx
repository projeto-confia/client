import { Grid, Box } from '@material-ui/core'

import { SectionStatisticsProps } from '@/types'
import { StatisticDataCountCard } from '@/components'

const SectionStatistics = ({ statisticDatas }: SectionStatisticsProps) => {
  return (
    <Box p={2} clone>
      <Grid component="section" container justify="center" spacing={2}>
        {statisticDatas?.map((statisticData) => (
          <Grid item key={statisticData.title} xs={12} sm>
            <StatisticDataCountCard {...statisticData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SectionStatistics
