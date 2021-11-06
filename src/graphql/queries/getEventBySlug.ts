const GET_EVENT_BY_SLUG = /* GraphQL */ `
  query GET_EVENT($slug: String!) {
    eventBySlug(slug: $slug) {
      commonPageData {
        tabTitle
      }
      slug
      title
      subtitle
      content
      date
    }
  }
`
export default GET_EVENT_BY_SLUG
