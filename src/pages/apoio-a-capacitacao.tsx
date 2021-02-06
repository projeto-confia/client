import Head from 'next/head'
import { Box, Paper, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'

const ApoioACapacitacao = () => {
  return (
    <>
      <Head>
        <title>Apoio à Capacitação | CONFIA</title>
      </Head>

      <LayoutDefault>
        <Box p={2} component="section">
          <Typography component="h1" variant="h2" gutterBottom>
            Apoio à Capacitação
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

export default ApoioACapacitacao
