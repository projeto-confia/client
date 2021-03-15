import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { SponsorsGrid } from '@/containers'
import client from '../graphql/client'
import GET_SPONSORS_PAGE from '../graphql/queries/getSponsorPage'
import { SponsorsPageProps } from '../types'

const Patrocinadores = ({
  title,
  commonPageData: { tabTitle },
  sponsors,
}: SponsorsPageProps) => (
  <>
    <Head>
      <title>{tabTitle}</title>
    </Head>

    <LayoutDefault>
      <Box component="section" p={2}>
        <Typography component="h1" variant="h2">
          {title}
        </Typography>
        <SponsorsGrid sponsors={sponsors} />
      </Box>
    </LayoutDefault>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { sponsorsPage } = await client.request(GET_SPONSORS_PAGE)
  return {
    props: {
      ...sponsorsPage,
    },
  }
}

export default Patrocinadores
