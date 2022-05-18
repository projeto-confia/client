import Link from 'next/link'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { FakeNewsNotificationProps } from 'src/types/fakeNewsNotification'

export type FakeNewsNotificationsListProps = {
  fakeNewsNotifications: FakeNewsNotificationProps[]
}

const FakeNewsNotificationsList = ({
  fakeNewsNotifications,
}: FakeNewsNotificationsListProps) => {
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
      {fakeNewsNotifications.map((fakeNewsNotification) => (
        <ListItem key={fakeNewsNotification.slug} disableGutters>
          <Box width="100%" maxWidth="500px" clone>
            <Card>
              <CardContent>
                <Typography color="textPrimary">
                  {fakeNewsNotification.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href={`/fake-news-detectadas/${fakeNewsNotification.slug}`}
                  passHref
                >
                  <Button size="small" color="primary">
                    Saiba mais
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Box>
        </ListItem>
      ))}
    </Box>
  )
}

export default FakeNewsNotificationsList
