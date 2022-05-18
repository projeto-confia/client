import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Markdown } from '@/components'
import client from '../../graphql/client'
import GET_FAKE_NEWS_NOTIFICATIONS_SLUGS from '../../graphql/queries/getFakeNewsNotificationsSlugs'
import GET_FAKE_NEWS_NOTIFICATION_BY_SLUG from '../../graphql/queries/getFakeNewsNotificationBySlug'
import { FakeNewsNotificationProps } from '../../types/fakeNewsNotification'

const FakeNewsDetectada = ({ title, content }: FakeNewsNotificationProps) => {
  return (
    <>
      <Head>
        <title>{title}|CONFIA</title>
      </Head>

      <LayoutDefault>
        <Box component="section" p={2}>
          <Typography component="h1" variant="h2">
            {title}
          </Typography>
        </Box>
        <Box component="section" p={2} bgcolor="#fff">
          <Markdown content={content} />
        </Box>
      </LayoutDefault>
    </>
  )
}

type Path = { params: { slug: string } }
type Slug = { slug: string }
export const getStaticPaths: GetStaticPaths = async () => {
  const { fakeNewsNotifications } = await client.request(
    GET_FAKE_NEWS_NOTIFICATIONS_SLUGS
  )
  const toPath = ({ slug }: Slug): Path => ({ params: { slug } })

  return {
    paths: fakeNewsNotifications.map(toPath),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const variables = { slug: params?.slug }
  const {
    fakeNewsNotificationBySlug: fakeNewsNotification,
  } = await client.request(GET_FAKE_NEWS_NOTIFICATION_BY_SLUG, variables)

  return { props: { ...fakeNewsNotification } }
}

export default FakeNewsDetectada
