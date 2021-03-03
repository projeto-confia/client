const GET_JED_PAGE = /* GraphQL */ `
  fragment commonPagedata on JedPage {
    commonPageData {
      tabTitle
    }
  }

  query JED_PAGE {
    jedPage {
      ...commonPagedata
      title
      subtitle
      media {
        url
        alternativeText
        ext
        formats
      }
      content
    }
  }
`
export default GET_JED_PAGE
