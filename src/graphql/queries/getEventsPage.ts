const GET_EVENTS_PAGE = /* GraphQL */ `
  fragment commonPageData on EventsPage {
    commonPageData {
      tabTitle
    }
  }

  query EVENTS_PAGE {
    eventsPage {
      ...commonPageData
      title
      events {
        slug
        title
        subtitle
        media {
          alternativeText
          ext
          formats
          url
          mime
        }
      }
    }
  }
`

export default GET_EVENTS_PAGE
