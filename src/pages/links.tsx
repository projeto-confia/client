import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { LinksList } from '@/containers'
import { LinkPageProps } from '@/types'
import client from '../graphql/client'
import GET_LINKS_PAGE from '../graphql/queries/getLinksPage'

const Links = ({
  commonPageData: { logo, tabTitle },
  title,
  relatedLinks,
}: LinkPageProps) => {
  return (
    <>
      <Head>
        <title>{tabTitle}</title>
      </Head>

      <LayoutDefault logo={logo}>
        <Box component="section" p={2}>
          <Typography component="h1" variant="h2">
            {title}
          </Typography>
          <LinksList links={relatedLinks} />
        </Box>
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { linksPage } = await client.request(GET_LINKS_PAGE)

  return {
    props: {
      ...linksPage,
    },
  }
}

export default Links
