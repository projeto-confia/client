import { Box, Container } from '@material-ui/core'

import { Header } from '@/components'

export type LayoutDefaultProps = {
  children: NonNullable<React.ReactNode>
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => (
  <>
    <Header />

    <Box marginTop={10} clone>
      <Container maxWidth="lg" component="main">
        {children}
      </Container>
    </Box>
  </>
)

export default LayoutDefault
