const GET_PROJECT_PAGE = /* GraphQL */ `
  query GET_PROJECT_PAGE {
    projectPage {
      commonPageData {
        tabTitle
      }
      title
      content
    }
  }
`
export default GET_PROJECT_PAGE
