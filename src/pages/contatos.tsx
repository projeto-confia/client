import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { HomePageProps } from '@/types'
import client from '../graphql/client'
import GET_HOME_PAGE from '../graphql/queries/getHomePage'

const Contatos = ({ commonPageData: { logo } }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Contatos | CONFIA</title>
      </Head>

      <LayoutDefault logo={logo}>
        <Typography component="h1" variant="h1">
          Contatos
        </Typography>
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { homePage } = await client.request(GET_HOME_PAGE)

  return {
    props: {
      ...homePage,
    },
  }
}

export default Contatos
