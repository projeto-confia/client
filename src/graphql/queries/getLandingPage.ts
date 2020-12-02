const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment sectionStatistics on LandingPage {
    sectionStatistics {
      statisticDatas: statisticData {
        title
        subtitle
        count
      }
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
      ...sectionStatistics
      ...sectionHero
      ...sectionAbout
      ...sectionSponsors
      ...sectionTeam
    }
  }
`

export default GET_LANDING_PAGE
