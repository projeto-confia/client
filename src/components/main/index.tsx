import { Typography, Button } from '@material-ui/core'

const Main = ({ title = 'CONFIA' }) => (
  <main>
    <Typography variant="h1">{title}</Typography>
    <Button variant="contained" color="primary">
      Ok, entendido!
    </Button>
  </main>
)

export default Main
