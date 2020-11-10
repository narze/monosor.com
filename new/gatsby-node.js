exports.onCreateNode = ({ node }) => {
  // eslint-disable-next-line no-console
  console.log(node.internal.type)
  // const { createNodeField } = actions
  // if (node.internal.type === `Mdx`) {
  //   const slug = createFilePath({ node, getNode, basePath: `pages` })
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   })
  // }
}
