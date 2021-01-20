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
      media {
        url
        alternativeText
        ext
        formats
      }
    }
  }

  query GET_HOME_HAME {
    homePage {
      ...commonPageData
      ...sectionHero
      ...sectionStatistics
      ...sectionOverview
    }
  }
`

export default GET_HOME_PAGE
