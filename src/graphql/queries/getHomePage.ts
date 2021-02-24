const GET_HOME_PAGE = /* GraphQL */ `
  fragment commonPageData on HomePage {
    commonPageData {
      tabTitle
      logo {
        url
        alternativeText
      }
    }
  }

  fragment sectionHero on HomePage {
    sectionHero {
      title
      description
    }
  }

  fragment sectionStatistics on HomePage {
    sectionStatistics {
      statisticData {
        title
        subtitle
        count
      }
    }
  }

  fragment sectionOverview on HomePage {
    sectionOverview {
      title
      description
    }
  }

  fragment sectionSubProjects on HomePage {
    sectionSubProjects {
      title
      message
      subProjects: subProject {
        title
        description
      }
    }
  }

  query GET_HOME_HAME {
    homePage {
      ...commonPageData
      ...sectionHero
      ...sectionStatistics
      ...sectionOverview
      ...sectionSubProjects
    }
  }
`

export default GET_HOME_PAGE
