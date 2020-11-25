import { Box, Typography, useTheme } from '@material-ui/core'
import { CheckCircleOutlineRounded } from '@material-ui/icons'

import { SectionHowWorksProps } from '@/types'
import { ProcessStep } from '@/components'

const SectionHowWorks = ({ title, processSteps }: SectionHowWorksProps) => {
  const theme = useTheme()

  return (
    <Box component="section" p={4}>
      <Typography component="h2" variant="h2">
        {title}
      </Typography>
      <Box
        component="div"
        marginY={4}
        marginX={'auto'}
        maxWidth={theme.breakpoints.values['lg']}
      >
        {processSteps.map((processStep) => (
          <ProcessStep key={processStep.label} {...processStep} />
        ))}

        <Box
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginY={3}
        >
          <Typography component="p" variant="body1">
            Notícia verificada
          </Typography>
          <CheckCircleOutlineRounded color="secondary" />
        </Box>
      </Box>
    </Box>
  )
}

export default SectionHowWorks
