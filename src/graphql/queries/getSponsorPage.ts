const GET_SPONSORS_PAGE = /* GraphQL */ `
  fragment commonPagedata on SponsorsPage {
    commonPageData {
      tabTitle
    }
  }

  fragment sponsors on SponsorsPage {
    sponsors {
      name
      description
      link
      logo {
        url
        alternativeText
      }
    }
  }

  query GET_SPONSORS_PAGE {
    sponsorsPage {
      ...commonPagedata
      title
      ...sponsors
    }
  }
`
export default GET_SPONSORS_PAGE
