import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const theme = () =>
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: {
          main: '#33b5cc',
        },
        secondary: {
          main: '#61c78c',
        },
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            ['html, body']: {
              WebkitFontSmoothing: 'auto',
              padding: 0,
              margin: 0,
              fontFamily:
                'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
              backgroundImage: 'url(/images/bg-texture.jpg)',
            },
          },
        },
      },
    })
  )

export default theme
