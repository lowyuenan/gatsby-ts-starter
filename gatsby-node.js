/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContentJson {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  results.data.allContentJson.edges.forEach(edge => {
    createPage({
      path: relativeUrl,
      component: require.resolve(`./src/templates/content-page.tsx`),
      context: {
        title,
      },
    })
  })
}
