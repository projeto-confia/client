import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'

const Automata = () => (
  <>
    <Head>
      <title>AUTOMATA</title>
    </Head>

    <LayoutDefault>
      <Box component="section" p={2}>
        <Typography component="h1" variant="h2">
          AUTOMATA
        </Typography>
        <Typography component="h2" variant="h3">
          Um Ambiente Computacional para Combate Automático a Fake News sobre
          COVID-19 e outras SARS em Redes Sociais Virtuais
        </Typography>
      </Box>
    </LayoutDefault>
  </>
)

export default Automata
