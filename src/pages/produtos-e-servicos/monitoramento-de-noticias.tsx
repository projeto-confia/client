import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Markdown } from '@/components'
import { NewsMonitoringPageProps } from '@/types'
import client from '../../graphql/client'
import GET_NEWS_MONITORING_PAGE from '../../graphql/queries/getNewsMonitoringPage'

const NewsMonitoringPage = ({
  commonPageData: { tabTitle },
  title,
  content,
}: NewsMonitoringPageProps) => (
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
  const { newsMonitoringPage } = await client.request(GET_NEWS_MONITORING_PAGE)

  return {
    props: {
      ...newsMonitoringPage,
    },
  }
}

export default NewsMonitoringPage
