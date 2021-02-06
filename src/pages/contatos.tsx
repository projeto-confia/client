import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { Contacts } from '@/containers'
import { ContactPageProps } from '@/types'
import client from '../graphql/client'
import GET_CONTACT_PAGE from '../graphql/queries/getContactPage'

const Contatos = ({
  commonPageData: { tabTitle },
  title,
  email,
  socialNetworkLinks,
}: ContactPageProps) => (
  <>
    <Head>
      <title>{tabTitle}</title>
    </Head>

    <LayoutDefault>
      <Box component="section" p={2}>
        <Typography component="h1" variant="h2">
          {title}
        </Typography>
        <Contacts email={email} socialNetworkLinks={socialNetworkLinks} />
      </Box>
    </LayoutDefault>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { contactPage } = await client.request(GET_CONTACT_PAGE)

  return {
    props: {
      ...contactPage,
    },
  }
}

export default Contatos
