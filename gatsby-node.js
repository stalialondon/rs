/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
        `
      {
        allContentfulBlogPosts {
          edges {
            node {
              slug
            }
          }
          
        }
      }      
        `
    )

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create pages for each Contentful Post
    const blogTemplate = path.resolve(`src/components/blog/BlogTemplate.js`)
    result.data.allContentfulBlogPosts.edges.forEach(({ node }) => {
        
        const path = `blog/${node.slug}`
        createPage({
            path,
            component: blogTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
                slug: node.slug
            },
        })
    })
}