import Head from 'next/head'

import { GetStaticProps } from 'next'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Markdown, Media } from '@/components'
import { SubProjectPageProps } from '@/types'

import client from '../../graphql/client'
import GET_JED_PAGE from '../../graphql/queries/getJedPage'

const Jed = ({
  commonPageData: { tabTitle },
  title,
  subtitle,
  media,
  content,
}: SubProjectPageProps) => (
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
          <Typography
            component="h2"
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
          >
            {subtitle}
          </Typography>
        </header>

        <Box margin="2rem auto" maxWidth="fit-content">
          <Media {...media} />
        </Box>

        <Markdown content={content} />
      </Box>
    </LayoutDefault>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { jedPage } = await client.request(GET_JED_PAGE)

  return {
    props: {
      ...jedPage,
    },
  }
}

export default Jed
