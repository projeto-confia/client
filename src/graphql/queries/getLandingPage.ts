const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment sectionHero on LandingPage {
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

  fragment sectionHowWorks on LandingPage {
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
  }

  fragment sectionAbout on LandingPage {
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

  fragment sectionSponsors on LandingPage {
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
  }

  fragment sectionTeam on LandingPage {
    sectionTeam {
      title
      members {
        name
        role
        photo {
          url
          alternativeText
        }
        socialNetworkLinks: socialNetworkLink {
          socialNetwork
          url
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...sectionHero
      ...sectionHowWorks
      ...sectionAbout
      ...sectionSponsors
      ...sectionTeam
    }
  }
`

export default GET_LANDING_PAGE
