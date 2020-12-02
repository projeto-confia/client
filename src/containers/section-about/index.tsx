import Image from 'next/image'
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
      p={2}
    >
      <Box maxWidth="600px" alignSelf="flex-start">
        <Typography component="h2" variant="h2">
          {title}
        </Typography>
        <Typography component="h3" variant="h3" gutterBottom>
          {subtitle}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
      <Box width="100%" maxWidth="600px" clone>
        <Image
          src={getImageUrl(image.url)}
          alt={image.alternativeText}
          loading="lazy"
          width={400}
          height={400}
        />
      </Box>
    </Box>
  )
}

export default SectionAbout
