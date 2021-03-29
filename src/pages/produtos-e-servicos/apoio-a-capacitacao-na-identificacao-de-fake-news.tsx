import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Markdown } from '@/components'
import { SupportForTrainingInFakeNewsIdentificationPageProps } from '@/types'
import client from '../../graphql/client'
import GET_SUPPORT_FOR_TRAINING_IN_FAKE_NEWS_IDENTIFICATION_PAGE from '../../graphql/queries/getSupportForTrainingInFakeNewsIdentificationPage'

const SupportForTrainingInFakeNewsIdentificationPage = ({
  commonPageData: { tabTitle },
  title,
  content,
}: SupportForTrainingInFakeNewsIdentificationPageProps) => (
  <>
    <Head>
      <title>{tabTitle}</title>
    </Head>
    <LayoutDefault>
      <Box component="section" p={2}>
        <header>
          <Typography component="h1" variant="h2">
            {title}
          </Typography>
        </header>

        <Markdown content={content} />
      </Box>
    </LayoutDefault>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const {
    supportForTrainingInFakeNewsIdentificationPage,
  } = await client.request(
    GET_SUPPORT_FOR_TRAINING_IN_FAKE_NEWS_IDENTIFICATION_PAGE
  )

  return {
    props: {
      ...supportForTrainingInFakeNewsIdentificationPage,
    },
  }
}

export default SupportForTrainingInFakeNewsIdentificationPage
