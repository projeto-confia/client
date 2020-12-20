import { Box, Container } from '@material-ui/core'

import { Header } from '@/components'
import { ImageProps } from '@/types'

export type LayoutDefaultProps = {
  children: NonNullable<React.ReactNode>
  logo: ImageProps
}

const LayoutDefault = ({ children, logo }: LayoutDefaultProps) => (
  <main>
    <Header image={logo} title="confia" />

    <Box marginTop={10} clone>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  </main>
)

export default LayoutDefault
