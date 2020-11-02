const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      header {
        title
        description
        button {
          label
          url
        }
        image {
          url
          alternativeText
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
