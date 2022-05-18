const GET_FAKE_NEWS_NOTIFICATIONS_PAGE = /* GraphQL */ `
  query LIST_FAKE_NEWS_NOTIFICATIONS($offset: Int!, $limit: Int!) {
    fakeNewsNotificationsConnection {
      aggregate {
        count
        totalCount
      }
    }
    fakeNewsNotificationList {
      title
      fakeNewsNotifications: fake_news_notifications(
        limit: $limit
        start: $offset
      ) {
        slug
        title
      }
    }
  }
`

export default GET_FAKE_NEWS_NOTIFICATIONS_PAGE
