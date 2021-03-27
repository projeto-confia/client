const GET_NEWS_MONITORING_PAGE = /* GraphQL */ `
  fragment commonPageData on NewsMonitoringPage {
    commonPageData {
      tabTitle
    }
  }

  query GET_NEWS_MONITORING_PAGE {
    newsMonitoringPage {
      ...commonPageData
      title
      content
    }
  }
`
export default GET_NEWS_MONITORING_PAGE
