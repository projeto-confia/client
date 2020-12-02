import { Box, Card, CardContent, Typography } from '@material-ui/core'

import { StatisticDataProps } from '@/types'

const StatisticDataCountCard = ({
  title,
  subtitle,
  count,
}: StatisticDataProps) => (
  <Box minHeight="100%" clone>
    <Card raised>
      <Box display="flex" flexDirection="column" height={200} clone>
        <CardContent>
          <Typography component="h2" variant="h5" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography component="p" variant="body2" color="textSecondary">
              {subtitle}
            </Typography>
          )}
          <Box marginTop="auto">
            <Typography component="p" variant="h2" color="primary">
              {count.toLocaleString('pt-BR')}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  </Box>
)

export default StatisticDataCountCard
