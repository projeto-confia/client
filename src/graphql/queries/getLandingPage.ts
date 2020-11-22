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
      sectionSponsors {
        title
        sponsors {
          name
          logo {
            url
            alternativeText
          }
        }
      }
      sectionTeam {
        title
        members {
          name
          role
          photo {
            url
            alternativeText
          }
          socialNetworkLink {
            socialNetwork
            url
          }
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
