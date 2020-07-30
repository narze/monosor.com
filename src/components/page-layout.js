import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const shortcodes = { Link }

function PageLayout({ children, pageContext }) {
  const { title } = pageContext.frontmatter

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Header />

      <main className="flex-grow w-full max-w-4xl px-4 py-2 mx-auto md:px-8 md:py-4">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </main>

      <Footer />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  })
};

export default PageLayout;
