import { GetStaticProps } from 'next'
import Head from 'next/head'

import { LayoutDefault } from '@/components'
import { SectionHero, SectionStatistics, SectionOverview } from '@/containers'
import { HomePageProps } from '@/types'
import client from '../graphql/client'
import GET_HOME_PAGE from '../graphql/queries/getHomePage'

const Home = ({
  commonPageData: { logo, tabTitle },
  sectionHero,
  sectionStatistics,
  sectionOverview,
}: HomePageProps) => (
  <>
    <Head>
      <title>{tabTitle}</title>
    </Head>

    <LayoutDefault logo={logo}>
      <SectionHero {...sectionHero} />
      <SectionStatistics {...sectionStatistics} />
      <SectionOverview {...sectionOverview} />
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
