import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  useTheme,
} from '@material-ui/core'

import { MemberProps } from '../../types/member'
import { getImageUrl } from '../../utils/getImageUrl'
import { getSocialNetworkIcon } from '../../utils/getSocialNetworkIcon'

const Contributor = ({
  id,
  name,
  description,
  photo: { url, alternativeText },
  socialNetworkLinks,
}: MemberProps) => {
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
            image={getImageUrl(url)}
            height={200}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
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
        <Box flexDirection="row-reverse" clone>
          <CardActions>
            <Button size="small" color="primary">
              Saiba mais
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default Contributor
