module.exports = {
  siteMetadata: {
    title: `monosor`,
    description: `narze's digital garden`,
    author: `@narze`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // defaultLayouts: {
        //   default: require.resolve('./src/components/page-layout.tsx'),
        // },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/posts/`,
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: '../src/images/', // TODO: Change when done migrating
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `monosor : digital garden`,
        short_name: `monosor`,
        start_url: `/`,
        background_color: `#39393a`,
        theme_color: `#ff8552`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/icon-*'],
        },
      },
    },
  ],
}
