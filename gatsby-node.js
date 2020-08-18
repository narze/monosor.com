const path = require(`path`)
const fs = require('fs');
const mkdirp = require("mkdirp")

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query pageQuery {
      allMdx(filter: {frontmatter: {draft: {ne: true}}}) {
        totalCount
      }
    }
  `)

  const data = {
    count: result.data.allMdx.totalCount,
  }

  mkdirp.sync(path.join(__dirname, 'public', 'api'))

  const json = JSON.stringify(data);
  fs.writeFileSync(path.join(__dirname, 'public', 'api', 'info.json'), json, 'utf8')
}
