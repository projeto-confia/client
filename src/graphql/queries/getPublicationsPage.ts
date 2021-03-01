const GET_PUBLICATIONS_PAGE = /* GraphQL */ `
  fragment commonPagedata on PublicationsPage {
    commonPageData {
      tabTitle
    }
  }

  fragment publications on PublicationsPage {
    publications(sort: "publicationDate:desc") {
      title
      publicationLink
      authors
      abstract
      keywords
      publishingInstitution
      publicationDate
    }
  }

  query PUBLICATIONS_PAGE {
    publicationsPage {
      ...commonPagedata
      title
      ...publications
    }
  }
`
export default GET_PUBLICATIONS_PAGE
