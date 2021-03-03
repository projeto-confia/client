import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from '@material-ui/core'

import { ContributorProps } from '../../types/contributor'
import { resolveUrl } from '../../utils/getImageUrl'
import { getSocialNetworkIcon } from '../../utils/getSocialNetworkIcon'

const Contributor = ({
  id,
  name,
  role,
  description,
  photo: { url, alternativeText },
  socialNetworkLinks,
}: ContributorProps) => {
  const theme = useTheme()
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      key={id}
      clone
    >
      <Card>
        <div>
          <CardMedia
            component="img"
            alt={alternativeText}
            title={name}
            image={resolveUrl(url)}
            height={200}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom color="primary">
              {role}
            </Typography>
            <Box component="ul" p={0}>
              {socialNetworkLinks?.map(({ socialNetwork, url }) => (
                <Box clone key={url} color={theme.palette.text.primary} mr={1}>
                  <a
                    href={url}
                    target="blank"
                    rel="nofollow noreferrer"
                    aria-label={`Link para ${socialNetwork}.`}
                    title={socialNetwork}
                  >
                    {getSocialNetworkIcon(socialNetwork)}
                  </a>
                </Box>
              ))}
            </Box>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Box>
  )
}

export default Contributor
