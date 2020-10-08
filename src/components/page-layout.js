import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const shortcodes = { Link }

function PageLayout({ children, pageContext }) {
  const { title, wip } = pageContext.frontmatter

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Header />

      <main className="flex-grow w-full max-w-4xl px-4 py-2 mx-auto md:px-8 md:py-4">
        { wip && <p>(This page is still work in progress)</p>}
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
        { wip && <p>(This page is still work in progress)</p>}
      </main>

      <Footer />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      wip: PropTypes.bool,
    })
  })
};

export default PageLayout;
