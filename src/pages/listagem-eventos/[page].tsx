import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault, Pagination } from '@/components'
import { EventCardsList } from '@/containers'
import { EventsPageProps } from '@/types'
import client from '../../graphql/client'
import GET_EVENTS_PAGE from '../../graphql/queries/getEventsPage'

type Pagination = {
  page: number
  limit: number
  offset: number
  links?: {
    active: boolean
    url: string
  }[]
}

const Eventos = ({
  commonPageData: { tabTitle },
  title,
  events,
  links,
}: EventsPageProps & Pagination) => {
  console.log(links)
  return (
    <>
      <Head>
        <title>{tabTitle}</title>
      </Head>

      <LayoutDefault>
        <Box component="section" p={2}>
          <Typography component="h1" variant="h2">
            {title}
          </Typography>
          <EventCardsList events={events} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const variables = {
    offset: 0,
    limit: 10,
  }
  const {
    eventsConnection: {
      aggregate: { count },
    },
    eventsPage: { eventsPerPage },
  } = await client.request(GET_EVENTS_PAGE, variables)

  const pages = Math.ceil(count / eventsPerPage)

  const paths = [...Array(pages).keys()].map((i) => ({
    params: {
      page: (++i).toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = +(params?.page || 1)
  const limit = +(params?.eventsPerPage || DEFAULT_LIMIT)

  const pagination: Pagination = {
    page,
    limit,
    offset: (+page - 1) * limit,
  }

  const {
    eventsConnection: {
      aggregate: { count },
    },
    eventsPage,
  } = await client.request(GET_EVENTS_PAGE, pagination)

  const pages = Math.ceil(count / limit)

  const links = [...Array(pages).keys()]
    .map((i) => ++i)
    .map((i) => ({
      active: i === page,
      url: `/listagem-eventos/${i}`,
    }))

  return {
    props: {
      ...eventsPage,
      links,
    },
  }
}

export default Eventos
