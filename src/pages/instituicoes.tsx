import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { InstitutionGrid } from '@/containers'
import { InstitutionsPageProps } from '@/types'
import client from '../graphql/client'
import GET_INSTITUTIONS_PAGE from '../graphql/queries/getInstitutionsPage'

const Instituicoes = ({
  commonPageData: { tabTitle },
  title,
  institutions,
}: InstitutionsPageProps) => {
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
          <InstitutionGrid institutions={institutions} />
        </Box>
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { institutionsPage } = await client.request(GET_INSTITUTIONS_PAGE)

  return {
    props: {
      ...institutionsPage,
    },
  }
}

export default Instituicoes
