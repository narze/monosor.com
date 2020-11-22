const path = require(`path`)
const fs = require('fs')
const mkdirp = require('mkdirp')
const jwt = require('jsonwebtoken')
const { createFilePath } = require('gatsby-source-filesystem')

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // TODO: if is index page, create screenshot with cache bust by number of pages

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    let token = null
    let key = ''

    if (process.env.SS_PRIVATE_KEY) {
      key = process.env.SS_PRIVATE_KEY
    } else if (process.env.SS_PRIVATE_KEY_PATH) {
      key = require('fs').readFileSync(
        require.resolve(process.env.SS_PRIVATE_KEY_PATH)
      )
    }

    if (key.length) {
      token = jwt.sign(
        {
          url: `https://monosor.com${slug}`,
          width: 1280,
          height: 720,
          deviceScaleFactor: 2,
        },
        key,
        {
          algorithm: 'RS256',
          noTimestamp: true,
          issuer: 'monosor',
        }
      )

      createNodeField({
        node,
        name: `screenshot`,
        value: token,
      })
    } else {
      createNodeField({
        node,
        name: `screenshot`,
        value: '',
      })
    }
  }
}

// Count & expose post count via API
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query pageQuery {
      allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
        totalCount
        edges {
          node {
            id
            fields {
              slug
              screenshot
            }
          }
        }
      }
    }
  `)

  // 1. API
  mkdirp.sync(path.join(__dirname, 'public', 'api'))

  const json = JSON.stringify({
    count: result.data.allMdx.totalCount,
  })

  fs.writeFileSync(
    path.join(__dirname, 'public', 'api', 'info.json'),
    json,
    'utf8'
  )

  // 2. Pages
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/components/page-layout.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
