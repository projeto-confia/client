import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

import { SponsorProps } from '../../types/sponsorPage'
import { getImageUrl } from 'src/utils/getImageUrl'

export type SponsorsGridProps = {
  sponsors: SponsorProps[]
}

const SponsorsGrid = ({ sponsors }: SponsorsGridProps) => {
  const openAnotherTab = (sponsorLink: string) => () =>
    window.open(sponsorLink, '__blank', 'noreferrer')

  return (
    <Box
      component="ul"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      justifyItems="center"
      gridGap="10px"
      padding={0}
      marginTop={2}
    >
      {sponsors.map(({ logo: { alternativeText, url }, name, link }) => (
        <Box clone key={name} maxWidth={300} padding={1}>
          <Card component="li" onClick={openAnotherTab(link)} title={link}>
            <Box
              clone
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              height="100%"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={alternativeText}
                  image={getImageUrl(url)}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  )
}

export default SponsorsGrid
