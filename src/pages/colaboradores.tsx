import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { ContributorsGrid } from '@/containers'

import client from '../graphql/client'
import GET_CONTRIBUTORS_PAGE from '../graphql/queries/getContributorsPage'
import { ContributorsPageProps } from '../types/contributorsPage'

const Colaboradores = ({
  commonPageData: { tabTitle },
  title,
  members,
}: ContributorsPageProps) => (
  <>
    <Head>
      <title>{tabTitle}</title>
    </Head>

    <LayoutDefault>
      <Box component="section" p={2}>
        <Typography component="h1" variant="h2">
          {title}
        </Typography>

        <ContributorsGrid contributors={members} />
      </Box>
    </LayoutDefault>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { contributorsPage } = await client.request(GET_CONTRIBUTORS_PAGE)

  return {
    props: {
      ...contributorsPage,
    },
  }
}

export default Colaboradores
