const GET_CONTACT_PAGE = /* GraphQL */ `
  query GET_CONTACT_PAGE {
    contactPage {
      commonPageData {
        tabTitle
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
