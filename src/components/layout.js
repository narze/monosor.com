import PropTypes from "prop-types";
import React from "react";

// import Header from "./header";
// import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* <Header /> */}

      <main className="w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
