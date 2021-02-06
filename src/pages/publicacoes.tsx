import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Typography, Box } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { PublicationsList } from '@/containers'
import { PublicationsPageProps } from '@/types'
import client from '../graphql/client'
import GET_PUBLICATIONS_PAGE from '../graphql/queries/getPublicationsPage'

const Publicacoes = ({
  commonPageData: { tabTitle },
  title,
  publications,
}: PublicationsPageProps) => {
  return (
    <>
      <Head>
        <title>{tabTitle}</title>
      </Head>

      <LayoutDefault>
        <Box component="section" p={2}>
          <Typography component="h1" variant="h2">
            {title}
          </Typography>
          <PublicationsList publications={publications} />
        </Box>
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { publicationsPage } = await client.request(GET_PUBLICATIONS_PAGE)

  return {
    props: {
      ...publicationsPage,
    },
  }
}

export default Publicacoes
