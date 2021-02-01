import Image from 'next/image'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from '@material-ui/core'

import { getImageUrl } from 'src/utils/getImageUrl'
import { InstitutionProps } from '@/types'

export type InstitutionsGridProps = {
  institutions: InstitutionProps[]
}

const InstitutionsGrid = ({ institutions }: InstitutionsGridProps) => {
  const theme = useTheme()
  const cardSize = 300
  const imageSize = 250

  return (
    <Box
      component="ul"
      display="grid"
      gridTemplateColumns={`repeat(auto-fill, ${cardSize}px)`}
      justifyContent="center"
      gridGap={30}
      padding={0}
      marginTop={2}
    >
      {institutions.map(({ logo: { alternativeText, url }, name, link }) => (
        <Box clone key={name} width={cardSize} padding={2}>
          <Card component="li" title={name}>
            <Box
              clone
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              height="100%"
            >
              <CardActionArea
                component="a"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <Box margin="0 auto" width={imageSize}>
                  <Image
                    alt={alternativeText}
                    src={getImageUrl(url)}
                    width={imageSize}
                    height={imageSize}
                    loading="eager"
                  />
                </Box>
                <CardContent style={{ padding: theme.spacing(1) }}>
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
export default InstitutionsGrid
