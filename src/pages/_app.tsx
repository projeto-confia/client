import type { AppProps } from 'next/app'
import { ComponentType } from 'react'

type Props = AppProps & {
  Component: ComponentType & {
    Layout: ComponentType
  }
}

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

export default MyApp
