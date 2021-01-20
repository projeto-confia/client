import Image from 'next/image'
import { Box, Typography, useTheme } from '@material-ui/core'

import { SectionOverviewProps } from '@/types'
import React from 'react'
import { getImageUrl } from '../../utils/getImageUrl'
import { MediaFormatProps } from 'src/types/media'

const SectionOverview = ({
  title,
  description,
  media: { alternativeText, formats },
}: SectionOverviewProps) => {
  const { url, width, height } = formats?.medium as MediaFormatProps
  const theme = useTheme()

  return (
    <Box component="section" p={2}>
      <Typography component="h1" variant="h2">
        {title}
      </Typography>
      <Typography component="p" variant="subtitle1">
        {description}
      </Typography>
      <Box m={`${theme.spacing(3)}px auto`} width={width} maxWidth="100%">
        <Image
          src={getImageUrl(url)}
          alt={alternativeText}
          width={width}
          height={height}
        />
      </Box>
    </Box>
  )
}

export default SectionOverview
