import React from 'react'

// import Header from "./header";
// import Footer from "./footer";

import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'

const shortcodes = { Link }

interface IPageLayout {
  children: React.ReactNode
  pageContext: {
    frontmatter: {
      title: string
      wip?: boolean
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
      }
    }
  }
}

function PageLayout({ data: { mdx } }: IPageLayout): JSX.Element {
  const { wip, title } = mdx.frontmatter
  const { screenshot } = mdx.fields

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Helmet
        meta={
          screenshot && screenshot.length
            ? [
                {
                  property: 'og:image',
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
        <Link to="/" className="text-gray-400">
          ← Back
        </Link>

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
      }
    }
  }
`
