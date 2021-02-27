import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const theme = () =>
  responsiveFontSizes(
    createMuiTheme({
      typography: {
        htmlFontSize: 13,
      },
      palette: {
        primary: {
          main: '#2d6862',
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
              backgroundImage: 'url(/images/bg-texture.png)',
            },
          },
        },
      },
    })
  )

export default theme
