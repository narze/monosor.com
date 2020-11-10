module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "MDXPages",
        path: "src/pages/",
      },
    },
    "gatsby-plugin-mdx",
  ],
};
