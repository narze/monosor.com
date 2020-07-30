import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-grow w-full max-w-4xl px-4 py-2 mx-auto md:px-8 md:py-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
