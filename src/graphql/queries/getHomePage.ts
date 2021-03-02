const GET_HOME_PAGE = /* GraphQL */ `
  fragment commonPageData on HomePage {
    commonPageData {
      tabTitle
    }
  }

  fragment sectionHero on HomePage {
    sectionHero {
      title
      description
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

  query GET_HOME_PAGE {
    homePage {
      ...commonPageData
      ...sectionHero
      ...sectionOverview
      ...sectionSubProjects
    }
  }
`

export default GET_HOME_PAGE
