const GET_SUPPORT_FOR_TRAINING_IN_FAKE_NEWS_IDENTIFICATION_PAGE = /* GraphQL */ `
  fragment commonPageData on SupportForTrainingInFakeNewsIdentificationPage {
    commonPageData {
      tabTitle
    }
  }

  query GET_SUPPORT_FOR_TRAINING_IN_FAKE_NEWS_IDENTIFICATION_PAGE {
    supportForTrainingInFakeNewsIdentificationPage {
      ...commonPageData
      title
      content
    }
  }
`

export default GET_SUPPORT_FOR_TRAINING_IN_FAKE_NEWS_IDENTIFICATION_PAGE
