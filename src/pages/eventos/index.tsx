import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { LayoutDefault } from '@/components'
import { EventCardsList } from '@/containers'
import { EventsPageProps } from '@/types'
import client from '../../graphql/client'
import GET_EVENTS_PAGE from '../../graphql/queries/getEventsPage'

const Eventos = ({
  commonPageData: { tabTitle },
  title,
  events,
}: EventsPageProps) => {
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
      </LayoutDefault>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { eventsPage } = await client.request(GET_EVENTS_PAGE)

  return {
    props: {
      ...eventsPage,
    },
  }
}

export default Eventos
