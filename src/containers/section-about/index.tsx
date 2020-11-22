import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'

import { SectionAboutProps } from '@/types'
import { getImageUrl } from '../../utils/getImageUrl'

const SectionAbout = ({
  title,
  subtitle,
  description,
  image,
}: SectionAboutProps) => {
  const theme = useTheme()
  const isUpToMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Box
      display="flex"
      flexDirection={isUpToMd ? 'row' : 'column'}
      alignItems="center"
      justifyContent="space-between"
      component="section"
      p={4}
    >
      <Box maxWidth="600px" alignSelf="flex-start">
        <Typography component="h1" variant="h1">
          {title}
        </Typography>
        <Typography component="h2" variant="h2" gutterBottom>
          {subtitle}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
      <Box width="100%" minWidth="320px" maxWidth="600px" clone>
        <img src={getImageUrl(image.url)} alt={image.alternativeText} />
      </Box>
    </Box>
  )
}

export default SectionAbout
