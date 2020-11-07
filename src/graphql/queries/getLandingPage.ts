const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        url
        alternativeText
      }
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
      sectionHowWorks {
        title
        processSteps {
          label
          icon {
            url
            alternativeText
          }
          description
        }
      }
      sectionAbout {
        title
        subtitle
        description
        image {
          url
          alternativeText
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
