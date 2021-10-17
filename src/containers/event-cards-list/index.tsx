import { EventCard } from '@/components'
import { EventProps } from '@/types'
import { Box, ListItem, useMediaQuery, useTheme } from '@material-ui/core'

export type EventCardsListProps = {
  events: EventProps[]
}

const EventCardsList = ({ events }: EventCardsListProps) => {
  const theme = useTheme()
  const isUpToLg = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box
      component="ul"
      display="grid"
      gridTemplateColumns={isUpToLg ? 'repeat(2, 1fr)' : undefined}
      gridGap={10}
      padding={0}
    >
      {events.map((event) => (
        <ListItem key={event.slug} disableGutters>
          <EventCard {...event} />
        </ListItem>
      ))}
    </Box>
  )
}

export default EventCardsList
