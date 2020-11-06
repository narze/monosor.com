import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://ss.narze.vercel.app/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL21vbm9zb3IuY29tIiwid2lkdGgiOjEyODAsImhlaWdodCI6NzIwLCJkZXZpY2VTY2FsZUZhY3RvciI6MSwiaXNzIjoibW9ub3NvciJ9.fbrm-wV9Ac9CsBh7320Q_6gn22tszpVlXOaGCvFIS61we9Ou2M4Uwt1UNkxY_bjln1MB1T-0mThTOZ_lGMpHeY5UbDsFEuxWBvcJ5mP5yxlyxPQfZx8YpuAHTAwdwFDqSkek1i3sDYZlpw-k4phgIDy0Hgp-c7KDqOA9Izwb_z7_YfNU3x0ujUG4I-KYVmjkgitxCyBGQpFVfqZCM3oBXIw0n8PRYbeXnee_WRBod8ePnuQSf6tXzFHZ-BfaODi7Wxhivc5xQVxNIeIpfyaWYx_uA-Xj7ONkwj1jQ6Vy6jWO_90j_8G0tJ5wXZovrNJ91bAnK_cLxYns-ij2lWTLJIR82khM0n7xLRQRw3rYYFd1w_sIwUnQLVvVGUw-gDfhQtQdFzZK6E1vqWYCFdx73Gazt_N_wb3cBcZJoqhDWL86MMpDIGVk9FF3YPgxzJTIdRN5P2iSIlO2m4_fpj718jIZcYiM4OEhaiWV9KIzOOTM1C1JR2IjuK9lA6JIp-sm_9uTq_k408h50jdXbvfbuO-UFnbWsOOX0-S7wqiNMkQGF8e_czN1L_VkDYf1j-xw13gsx178RjAW_8-VVNX-QwrMGjTYLTvo7ueNzYxDeB6pCd_L26_2T58qmcDrvHRIXDxSMMTH8n_P4qfdIDD-vb6X6glor45NSY45-OpHyyU.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
