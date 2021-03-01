const GET_LINKS_PAGE = /* GraphQL */ `
  fragment commomPageData on LinksPage {
    commonPageData {
      tabTitle
    }
  }

  fragment relatedLinks on LinksPage {
    relatedLinks {
      name
      description
      link
    }
  }

  query GET_LINKS_PAGE {
    linksPage {
      ...commomPageData
      title
      ...relatedLinks
    }
  }
`
export default GET_LINKS_PAGE
