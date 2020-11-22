import { ThemeProvider, CssBaseline } from '@material-ui/core'

import '../src/styles/globals.css'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
]
