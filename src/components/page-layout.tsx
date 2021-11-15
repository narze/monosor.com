import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'

import '../styles/tailwind.css'
import SEO from './seo'
// import Header from "./header";
// import Footer from "./footer";

const shortcodes = { Link }

interface IPageLayout {
  children: React.ReactNode
  pageContext: {
    frontmatter: {
      title: string
      wip?: boolean
      source?: string
    }
  }
  data: {
    mdx: {
      id: string
      body: string
      fields: {
        screenshot: string
      }
      frontmatter: {
        title: string
        wip?: boolean
        source?: string
      }
      slug: string
    }
  }
}

function PageLayout({ data: { mdx } }: IPageLayout): JSX.Element {
  const {
    slug,
    frontmatter: { wip, title, source },
    fields: { screenshot },
  } = mdx

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <SEO keywords={[`digital garden`, `blog`, `tech`]} title={title} />

      <Helmet
        meta={
          screenshot && screenshot.length
            ? [
                {
                  property: 'og:image',
                  content: `https://ss.narze.vercel.app/${screenshot}.png`,
                },
                {
                  property: 'twitter:image',
                  content: `https://ss.narze.vercel.app/${screenshot}.png`,
                },
              ]
            : []
        }
      >
        <title>{title}</title>
      </Helmet>

      {/* <Header /> */}

      <main className="flex-grow w-full max-w-4xl px-4 py-2 mx-auto md:px-8 md:py-4">
        <Link
          to={`/${slug.split('/').slice(0, -1).join('/')}`}
          className="text-gray-400"
        >
          ← Back
        </Link>

        {source && (
          <p>
            Source:{' '}
            <a href={source} target="_blank" rel="noreferrer">
              {source}
            </a>
          </p>
        )}

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>

        {wip && <p>(This page is still work in progress)</p>}
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default PageLayout

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        screenshot
      }
      frontmatter {
        title
        wip
        source
      }
      slug
    }
  }
`
