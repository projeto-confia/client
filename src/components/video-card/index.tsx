import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import DOMPurify from 'isomorphic-dompurify'

import { VideoCardProps } from '@/types'
import useStyles from './styled'

const purify = (dirty: string) =>
  DOMPurify.sanitize(dirty, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
  })

const VideoCard = ({ embedCode, description }: VideoCardProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia>
        <div
          className={classes.embededContainer}
          dangerouslySetInnerHTML={{ __html: purify(embedCode) }}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard
