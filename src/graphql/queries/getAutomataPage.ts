const GET_AUTOMATA_PAGE = /* GraphQL */ `
  fragment commonPagedata on AutomataPage {
    commonPageData {
      tabTitle
    }
  }

  query GET_AUTOMATA_PAGE {
    automataPage {
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
export default GET_AUTOMATA_PAGE
