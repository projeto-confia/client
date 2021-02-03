import { makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '100%',
      height: '100%',
      maxWidth: 595,
      margin: '0 auto',
    },
    embededContainer: {
      position: 'relative',
      display: 'block',
      width: '100%',
      minHeight: 300,
      padding: 0,
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100% !important',
        height: '100% !important',
        border: 0,
      },
      '& ::before': {
        display: 'block',
        content: '',
      },
      '& ::after': {
        display: 'block',
        content: '',
      },
    },
  })
)

export default useStyles
