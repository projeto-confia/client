import { Box, Container } from '@material-ui/core'

import { Header } from '@/components'

export type LayoutDefaultProps = {
  children: NonNullable<React.ReactNode>
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => (
  <main>
    <Header />

    <Box marginTop={10} clone>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  </main>
)

export default LayoutDefault
