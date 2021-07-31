import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

const fontFamily = [
  'Sentico Sans',
  'sans-serif',
  '-apple-system',
  'Segoe UI',
].join(',')

const theme = () =>
  responsiveFontSizes(
    createMuiTheme({
      typography: {
        htmlFontSize: 12,
        fontFamily,
        h1: {
          fontSize: '3rem',
        },
        h2: {
          fontSize: '2.5rem',
        },
        h3: {
          fontSize: '2rem',
        },
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
              backgroundImage: 'url(/images/bg-texture.png)',
            },
          },
        },
      },
    })
  )

export default theme
