module.exports = {
  siteMetadata: {
    title: `monosor`,
    description: `narze's digital garden`,
    author: `@narze`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/page-layout.js"),
        },
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `monosor : digital garden`,
        short_name: `monosor`,
        start_url: `/`,
        background_color: `#39393a`,
        theme_color: `#ff8552`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
    },
    `gatsby-plugin-offline`,
  ],
};
