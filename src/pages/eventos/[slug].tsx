import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Typography } from '@material-ui/core'

import { EventProps } from '@/types'
import { LayoutDefault, Markdown } from '@/components'
import client from '../../graphql/client'
import GET_EVENTS_SLUGS from '../../graphql/queries/getEventsSlugs'
import GET_EVENT_BY_SLUG from '../../graphql/queries/getEventBySlug'

const Evento = ({
  commonPageData: { tabTitle },
  title,
  subtitle,
  content,
}: EventProps) => {
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
          {subtitle && (
            <Typography
              component="h2"
              variant="subtitle1"
              color="textSecondary"
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box component="section" p={2} bgcolor="#fff">
          <Markdown content={content} />
        </Box>
      </LayoutDefault>
    </>
  )
}

type Path = { params: { slug: string } }
type EventSlug = { slug: string }
export const getStaticPaths: GetStaticPaths = async () => {
  const {
    eventsPage: { events },
  } = await client.request(GET_EVENTS_SLUGS)
  const toPath = ({ slug }: EventSlug): Path => ({ params: { slug } })

  return {
    paths: events.map(toPath),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const variables = { slug: params?.slug }
  const { eventBySlug: event } = await client.request(
    GET_EVENT_BY_SLUG,
    variables
  )
  return { props: { ...event } }
}

export default Evento
