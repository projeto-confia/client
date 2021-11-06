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
      events(sort: "date:desc") {
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
