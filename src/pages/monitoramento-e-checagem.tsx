import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { LandingPageProps } from '@/types'
import client from '../graphql/client'
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage'

const MonitoramentoEChecagem = ({ logo }: LandingPageProps) => {
  return (
    <>
      <Head>
        <title>Monitoramento e Checagem | CONFIA</title>
      </Head>

      <LayoutDefault logo={logo}>
        <Typography component="h1" variant="h1">
          Monitoramento e Checagem
        </Typography>
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage,
    },
  }
}

export default MonitoramentoEChecagem
