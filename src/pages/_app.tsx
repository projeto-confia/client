import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ComponentType } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import '../styles/globals.css'
import theme from '../styles/theme'

type Props = AppProps & {
  Component: ComponentType
}

function MyApp({ Component, pageProps }: Props) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
