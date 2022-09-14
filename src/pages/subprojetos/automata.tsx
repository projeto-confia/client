import Head from 'next/head'

import { GetStaticProps } from 'next'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Markdown } from '@/components'
import { SubProjectPageProps } from '@/types'

import client from '../../graphql/client'
import GET_AUTOMATA_PAGE from '../../graphql/queries/getAutomataPage'

const Automata = ({
  commonPageData: { tabTitle },
  title,
  subtitle,
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

        <Markdown content={content} />
      </Box>
    </LayoutDefault>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { automataPage } = await client.request(GET_AUTOMATA_PAGE)

  return {
    props: {
      ...automataPage,
    },
  }
}

export default Automata
