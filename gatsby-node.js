const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Change the node internal type from 'allMarkdownRemark' to 'MarkdownRemark'
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  )

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // Import Post Template Component
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  )

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    }

    createPage(pageOptions)
  }

  // Generate Post Page And Passing Slug Props for Query
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}
