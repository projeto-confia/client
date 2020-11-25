import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Container } from '@material-ui/core'

import { Header } from '@/components'
import {
  SectionHero,
  SectionHowWorks,
  SectionAbout,
  SectionSponsors,
} from '@/containers'
import { LandingPageProps } from '@/types'
import client from '../graphql/client'
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage'
import SectionTeam from 'src/containers/section-team'

const Home = ({
  logo,
  header,
  sectionHowWorks,
  sectionAbout,
  sectionSponsors,
  sectionTeam,
}: LandingPageProps) => (
  <>
    <Head>
      <title>CONFIA - Compartilhe com segurança</title>
    </Head>

    <main>
      <Header image={logo} title="confia" showMenuButton={false} />
      <Container maxWidth="lg">
        <SectionHero {...header} />
        <SectionHowWorks {...sectionHowWorks} />
        <SectionAbout {...sectionAbout} />
        <SectionTeam {...sectionTeam} />
        <SectionSponsors {...sectionSponsors} />
      </Container>
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
