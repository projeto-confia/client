import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core'

import { EventProps } from '@/types'
import useStyles from './styled'
import Media from '../media'
import Link from 'next/link'
import { format } from '../../utils/dateStringFormat'

const EventCard = ({ slug, title, media, subtitle, date }: EventProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia>
        <Media {...media} />
      </CardMedia>
      <div>
        <CardContent>
          {date && (
            <Typography component="p" variant="subtitle2" color="textSecondary">
              {format(date)}
            </Typography>
          )}
          <Typography variant="body1" component="p">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="textSecondary" component="p">
              {subtitle}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Link href={`/eventos/${slug}`} passHref>
            <Button size="small" color="primary">
              Saiba mais
            </Button>
          </Link>
        </CardActions>
      </div>
    </Card>
  )
}

export default EventCard
