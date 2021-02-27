import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'

const Jed = () => (
  <>
    <Head>
      <title>JED</title>
    </Head>

    <LayoutDefault>
      <Box component="section" p={2}>
        <Typography component="h1" variant="h2">
          JED - Jogos Educacionais Digitais para Apoio à Capacitação Discente na
          Identificação de Fake News Escritas em Língua Portuguesa
        </Typography>
      </Box>
    </LayoutDefault>
  </>
)

export default Jed
