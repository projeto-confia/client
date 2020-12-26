const GET_CONTRIBUTORS_PAGE = /* GraphQL */ `
  fragment commonPagedata on ContributorsPage {
    commonPageData {
      tabTitle
      logo {
        url
        alternativeText
      }
    }
  }

  fragment members on ContributorsPage {
    members {
      id
      name
      description
      role
      socialNetworkLinks: socialNetworkLink {
        socialNetwork
        url
      }
      photo {
        url
        alternativeText
      }
    }
  }

  query CONTRIBUTORS_PAGE {
    contributorsPage {
      ...commonPagedata
      title
      ...members
    }
  }
`
export default GET_CONTRIBUTORS_PAGE
