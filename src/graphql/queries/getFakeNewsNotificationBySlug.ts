const GET_FAKE_NEWS_NOTIFICATION_BY_SLUG = /* GraphQL */ `
  query GET_FAKE_NEWS_NOTIFICATION_BY_SLUG($slug: String!) {
    fakeNewsNotificationBySlug(slug: $slug) {
      slug
      title
      content
    }
  }
`
export default GET_FAKE_NEWS_NOTIFICATION_BY_SLUG
