import React from "react";

function Footer() {
  return (
    <footer>
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:px-8 md:py-6">
        <p>
          mns © {(new Date()).getFullYear()}
        </p>

        <p>
          <a
            className="font-bold no-underline"
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
