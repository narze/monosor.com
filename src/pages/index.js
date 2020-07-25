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
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <h1>monosor</h1>

        <p>Hello there! Welcome to my digital garden!</p>

        <h3>Posts</h3>

        {
          allPosts.map(({ node }) => (
            <div key={node.id}>
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
    allMdx {
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
