const GET_CONTACT_PAGE = /* GraphQL */ `
  query GET_CONTACT_PAGE {
    contactPage {
      commonPageData {
        tabTitle
        logo {
          url
          alternativeText
        }
      }
      title
      email
      socialNetworkLinks {
        socialNetwork
        url
      }
    }
  }
`
export default GET_CONTACT_PAGE
