import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Pagination } from '@/components'
import { FakeNewsNotificationList } from '@/containers'
import client from '../../graphql/client'
import GET_FAKE_NEWS_NOTIFICATIONS_PAGE from 'src/graphql/queries/getFakeNewsNotificationsPage'
import { FakeNewsNotificationPageProps } from 'src/types/fakeNewsNotificationPage'

type Pagination = {
  page: number
  limit: number
  offset: number
  links?: {
    active: boolean
    url: string
  }[]
}

const ListagemNotificacoesFakeNews = ({
  title,
  fakeNewsNotifications,
  links,
}: FakeNewsNotificationPageProps & Pagination) => {
  return (
    <>
      <Head>
        <title>{title} | CONFIA</title>
      </Head>

      <LayoutDefault>
        <Box component="section" p={2}>
          <Typography component="h1" variant="h2">
            {title}
          </Typography>
          <FakeNewsNotificationList
            fakeNewsNotifications={fakeNewsNotifications}
          />
        </Box>
        {links && links?.length > 1 && (
          <Box display="flex" justifyContent="center">
            <Pagination links={links} />
          </Box>
        )}
      </LayoutDefault>
    </>
  )
}

const DEFAULT_LIMIT = 10
const getPageWithDefaultParams = () => {
  const variables = {
    offset: 0,
    limit: DEFAULT_LIMIT,
  }
  return client.request(GET_FAKE_NEWS_NOTIFICATIONS_PAGE, variables)
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    fakeNewsNotificationsConnection: {
      aggregate: { count },
    },
  } = await getPageWithDefaultParams()

  const pages = Math.ceil(count / DEFAULT_LIMIT)

  const paths = [...Array(pages).keys()].map((i) => ({
    params: {
      page: (i + 1).toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = +(params?.page || 1)
  const pagination: Pagination = {
    page,
    limit: DEFAULT_LIMIT,
    offset: (page - 1) * DEFAULT_LIMIT,
  }

  const {
    fakeNewsNotificationsConnection: {
      aggregate: { count },
    },
    fakeNewsNotificationList,
  } = await client.request(GET_FAKE_NEWS_NOTIFICATIONS_PAGE, pagination)

  const pages = Math.ceil(count / DEFAULT_LIMIT)

  const links = [...Array(pages).keys()]
    .map((i) => i + 1)
    .map((i) => ({
      active: i === page,
      url: `/listagem-notificacoes-fake-news/${i}`,
    }))

  return {
    props: {
      ...fakeNewsNotificationList,
      links,
    },
  }
}

export default ListagemNotificacoesFakeNews
