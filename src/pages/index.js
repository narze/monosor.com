import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const allPosts = data.allMdx.edges

  return (
    <Layout>
      <SEO
        keywords={[`digital garden`, `blog`, `tech`]}
        title="~"
      />

      <section className="text-center">
        <h1 className="title">monosor</h1>

        <p>Hello there! Welcome to my <Link to="/digital-garden">digital garden!</Link></p>
      </section>

      <section className="text-center mt-8">
        <h3 className="mb-2">Posts</h3>

        {
          allPosts.map(({ node }) => (
            <div key={node.id} className="my-1">
              <Link to={node.slug}>
                {node.frontmatter.title}
              </Link>
            </div>
          ))
        }
      </section>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {draft: {ne: true}}}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fileAbsolutePath
          slug
        }
      }
    }
  }
`
