import React from "react";

function Footer() {
  return (
    <footer>
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          Created by{` `}
          <a
            className="font-bold no-underline"
            href="https://monosor.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            narze
          </a>
        </p>

        <p>
          <a
            className="font-bold text-white no-underline"
            href="https://github.com/narze"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
