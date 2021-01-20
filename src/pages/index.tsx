import { GetStaticProps } from 'next'
import Head from 'next/head'

import { LayoutDefault } from '@/components'
import { SectionHero, SectionStatistics } from '@/containers'
import { LandingPageProps } from '@/types'
import client from '../graphql/client'
import GET_LANDING_PAGE from '../graphql/queries/getHomePage'

const Home = ({ logo, header, sectionStatistics }: LandingPageProps) => {
  return (
    <>
      <Head>
        <title>CONFIA</title>
      </Head>

      <LayoutDefault logo={logo}>
        <SectionHero {...header} />
        <SectionStatistics {...sectionStatistics} />
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage,
    },
  }
}

export default Home
