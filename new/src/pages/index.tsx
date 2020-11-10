import React from 'react'
import { Link, graphql } from 'gatsby'
import '../styles/tailwind.css'

interface IndexPageProps {
  data: {
    allMdx: {
      edges: [
        { node: { id: string; slug: string; frontmatter: { title: string } } }
      ]
    }
  }
}

const IndexPage = ({ data }: IndexPageProps): JSX.Element => {
  const allPosts = data.allMdx.edges

  return (
    <>
      <section className="text-center">
        <h1 className="title">monosor</h1>

        <p>
          Hello there! Welcome to my{' '}
          <Link to="digital-garden">Digital Garden!</Link>
        </p>
      </section>

      <section className="text-center mt-8">
        <h3 className="mb-2">Posts</h3>

        {allPosts.map(({ node }) => (
          <div key={node.id} className="my-1">
            <Link to={node.slug}>{node.frontmatter.title}</Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
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
