import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
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
    <div className="font-sans p-4 md:pt-8 md:grid md:grid-cols-3 md:gap-10 lg:pl-20">
      <SEO keywords={[`digital garden`, `blog`, `tech`]} title="home" />

      <section className="text-center lg:text-right">
        <h1 className="mt-0">monosor</h1>

        <p>
          Hello there! Welcome to my{' '}
          <Link to="digital-garden">Digital Garden!</Link>
        </p>

        <p className="text-xs">
          <Link to="/reads">Reads 📚</Link>
        </p>

        <p className="text-xs">
          The coding tutorials are in{' '}
          <a href="https://monosor.dev">the other castle!</a>
        </p>

        <p>
          <a
            href="https://webring.wonderful.software#monosor.com"
            title="webring"
          >
            <img
              alt="webring"
              width="32"
              height="32"
              src="/images/webring.svg"
            />
          </a>
        </p>
      </section>

      <section className="text-left px-4 md:p-0 md:col-span-2">
        <h3 className="mb-2">All Posts ({allPosts.length})</h3>

        {allPosts.map(({ node }) => (
          <div key={node.id} className="my-1">
            <Link to={node.slug}>{node.frontmatter.title}</Link>
          </div>
        ))}
      </section>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    # Excludes drafts & posts in subfolders like "reads"
    allMdx(
      filter: { frontmatter: { draft: { ne: true } }, slug: { glob: "!*/*" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          # fileAbsolutePath
          slug
        }
      }
    }
  }
`
