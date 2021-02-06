import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Paper, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { HomePageProps } from '@/types'
import client from '../graphql/client'
import GET_HOME_PAGE from '../graphql/queries/getHomePage'

const MonitoramentoEChecagem = ({
  commonPageData: { logo },
}: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Monitoramento e Checagem | CONFIA</title>
      </Head>

      <LayoutDefault logo={logo}>
        <Box p={2} component="section">
          <Typography component="h1" variant="h2" gutterBottom>
            Monitoramento e Checagem
          </Typography>
          <Box p={4} clone>
            <Paper elevation={1} variant="outlined">
              <Typography component="p" variant="h4" gutterBottom>
                Aguarde, logo teremos novidades nessa página.
              </Typography>
              <Typography component="p" variant="body1">
                Por enquanto, fique à vontade para explorar as demais páginas.
              </Typography>
            </Paper>
          </Box>
        </Box>
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

export default MonitoramentoEChecagem
