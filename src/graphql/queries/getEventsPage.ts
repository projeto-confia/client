const GET_EVENTS_PAGE = /* GraphQL */ `
  fragment commonPageData on EventsPage {
    commonPageData {
      tabTitle
    }
  }

  query EVENTS_PAGE($offset: Int!, $limit: Int!) {
    eventsConnection {
      aggregate {
        count
        totalCount
      }
    }
    eventsPage {
      ...commonPageData
      eventsPerPage
      title
      events(sort: "date:desc", limit: $limit, start: $offset) {
        slug
        title
        subtitle
        date
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
