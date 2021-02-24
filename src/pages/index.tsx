import { GetStaticProps } from 'next'
import Head from 'next/head'
import Box from '@material-ui/core/Box'

import { LayoutDefault } from '@/components'
import {
  SectionHero,
  SectionStatistics,
  SectionOverview,
  SectionSubProjects,
} from '@/containers'
import { HomePageProps } from '@/types'
import client from '../graphql/client'
import GET_HOME_PAGE from '../graphql/queries/getHomePage'

const Home = ({
  commonPageData: { tabTitle },
  sectionHero,
  sectionStatistics,
  sectionOverview,
  sectionSubProjects,
}: HomePageProps) => (
  <>
    <Head>
      <title>{tabTitle}</title>
    </Head>

    <LayoutDefault>
      <Box paddingY={4}>
        <SectionHero {...sectionHero} />
      </Box>
      <SectionStatistics {...sectionStatistics} />
      <SectionOverview {...sectionOverview} />
      <SectionSubProjects {...sectionSubProjects} />
    </LayoutDefault>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { homePage } = await client.request(GET_HOME_PAGE)

  return {
    props: {
      ...homePage,
    },
  }
}

export default Home
