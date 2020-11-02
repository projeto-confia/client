import { GetStaticProps } from 'next'
import Head from 'next/head'

import Main from '../components/main'
import client from '../graphql/client'
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage'

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main />
  </div>
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
