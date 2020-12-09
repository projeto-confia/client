import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Container } from '@material-ui/core'

import { Header } from '@/components'
import {
  SectionHero,
  SectionAbout,
  SectionSponsors,
  SectionTeam,
  SectionStatistics,
} from '@/containers'
import { LandingPageProps } from '@/types'
import client from '../graphql/client'
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage'

const Home = ({
  logo,
  header,
  sectionAbout,
  sectionSponsors,
  sectionTeam,
  sectionStatistics,
}: LandingPageProps) => (
  <>
    <Head>
      <title>CONFIA - Compartilhe com segurança</title>
    </Head>

    <main>
      <Header image={logo} title="confia" />
      <Box marginTop={10} clone>
        <Container maxWidth="lg">
          <SectionHero {...header} />
          <SectionStatistics {...sectionStatistics} />
          <SectionAbout {...sectionAbout} />
          <SectionTeam {...sectionTeam} />
          <SectionSponsors {...sectionSponsors} />
        </Container>
      </Box>
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
