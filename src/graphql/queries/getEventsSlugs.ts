const GET_EVENTS_SLUG = /* GraphQL */ `
  query EVENTS_SLUGS {
    eventsPage {
      events {
        slug
      }
    }
  }
`

export default GET_EVENTS_SLUG
