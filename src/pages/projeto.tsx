import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Markdown } from '@/components'
import { ProjectPageProps } from '@/types'
import client from '../graphql/client'
import GET_PROJECT_PAGE from '../graphql/queries/getProjectPage'

const Projeto = ({
  commonPageData: { logo, tabTitle },
  title,
  content,
}: ProjectPageProps) => {
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
          <Markdown content={content} />
        </Box>
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { projectPage } = await client.request(GET_PROJECT_PAGE)

  return {
    props: {
      ...projectPage,
    },
  }
}

export default Projeto
