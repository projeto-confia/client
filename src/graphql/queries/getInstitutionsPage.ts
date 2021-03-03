const GET_INSTITUTIONS_PAGE = /* GraphQL */ `
  fragment commomPageData on InstitutionsPage {
    commonPageData {
      tabTitle
    }
  }

  fragment institutions on InstitutionsPage {
    institutions {
      name
      description
      link
      logo {
        url
        alternativeText
      }
    }
  }

  query GET_INSTITUTIONS_PAGE {
    institutionsPage {
      ...commomPageData
      title
      ...institutions
    }
  }
`
export default GET_INSTITUTIONS_PAGE
