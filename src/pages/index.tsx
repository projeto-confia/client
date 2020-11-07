import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Header } from '@/components'
import { SectionHero, SectionHowWorks, SectionAbout } from '@/containers'
import { LandingPageProps } from '@/types'
import client from '../graphql/client'
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage'

const Home = ({
  logo,
  header,
  sectionHowWorks,
  sectionAbout,
}: LandingPageProps) => (
  <>
    <Head>
      <title>CONFIA - Compartilhe com segurança</title>
    </Head>

    <main>
      <Header image={logo} title="confia" showMenuButton={false} />
      <SectionHero {...header} />
      <SectionHowWorks {...sectionHowWorks} />
      <SectionAbout {...sectionAbout} />
    </main>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage,
    },
  }
}

export default Home
