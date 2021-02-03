import { VideoCardProps } from '@/types'
import { Box, ListItem, useMediaQuery, useTheme } from '@material-ui/core'

import { VideoCard } from '@/components'

export type VideoCardsListProps = {
  videoCards: VideoCardProps[]
}

const VideoCardsList = ({ videoCards }: VideoCardsListProps) => {
  const theme = useTheme()
  const isUpToMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      component="ul"
      display="grid"
      gridTemplateColumns={isUpToMd ? 'repeat(2, 1fr)' : undefined}
      gridGap={10}
      padding={0}
    >
      {videoCards.map((videoCard) => (
        <ListItem key={videoCard.id} disableGutters>
          <VideoCard {...videoCard} />
        </ListItem>
      ))}
    </Box>
  )
}

export default VideoCardsList
