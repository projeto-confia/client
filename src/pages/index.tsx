import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Container, useMediaQuery } from '@material-ui/core'

import { Header, NavigationMenu, DrawerMenu } from '@/components'
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
import navigation from '../data/navigation'

const Home = ({
  logo,
  header,
  sectionAbout,
  sectionSponsors,
  sectionTeam,
  sectionStatistics,
}: LandingPageProps) => {
  const isDesktop = useMediaQuery('(min-width:1120px)')
  return (
    <>
      <Head>
        <title>CONFIA - Compartilhe com segurança</title>
      </Head>

      <main>
        <Header image={logo} title="confia">
          {isDesktop ? (
            <NavigationMenu menuItens={navigation} />
          ) : (
            <DrawerMenu menuItens={navigation}></DrawerMenu>
          )}
        </Header>
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
