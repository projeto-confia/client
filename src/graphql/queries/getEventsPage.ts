const GET_EVENTS_PAGE = /* GraphQL */ `
  fragment commomPageData on EventsPage {
    commonPageData {
      tabTitle
      logo {
        url
        alternativeText
      }
    }
  }

  fragment videoCards on EventsPage {
    videoCards {
      embedCode
      description
    }
  }

  query GET_EVENTS_PAGE {
    eventsPage {
      ...commomPageData
      title
      ...videoCards
    }
  }
`

export default GET_EVENTS_PAGE
