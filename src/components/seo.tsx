import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

interface SEOPropTypes {
  description?: string
  keywords?: string[]
  title?: string
  lang?: string
  meta?: Array<
    | {
        property: string
        content: string
      }
    | {
        name: string
        content: string
      }
  >
}

function SEO({
  description,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}: SEOPropTypes): JSX.Element {
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
  `)

  const metaDescription = description || site.siteMetadata.description

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
          content: `https://ss.narze.vercel.app/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL21vbm9zb3IuY29tIiwid2lkdGgiOjEyODAsImhlaWdodCI6NzIwLCJkZXZpY2VTY2FsZUZhY3RvciI6MiwiaXNzIjoibW9ub3NvciJ9.QQukBG09fqMYtuGRnKTUdv-JdWQlwUi8DgBCvEtKpIGZlhx_gIdFXu-W17beUiWcX1xob10NmeBkL7xzRButVly8IDmDOLkyVWxx-Fi0pccNK9eLItnPmSErrNFxwHiGUCz1nupmX4E87KxARg6YYG4ZCzXnDejzVgG1ZL1a6X6Zzpd-YyxL4wMNCKvFR0LnbTSOCzdkpR2Sc7l5ETzCkb2JqfLAugA_huqSzfF2ONs6qvheEyJVNsT3VRNJe4dSdpDplC_EQqt8jKYMky-4RfsHPzsZNn0_r2fHD9AHeu0LR-zAuGUdZuWI5sOC72KdH3yGixsLXfjKUtlxus2VbnIk2OFoNYyfQld6O-PH1f7Xj78HobwDGdCNuHcGfY4VJ-n6RV8ui2zX3QNU9YdhApdRJD6bDs2tRp459hdxKa8C_w30b0NJWYtVqXsQTIbMsBHbgIwqlOMiLOZOYOk0AhiOyMLipDJhOjYdJnicXKQbhHAD-ywdyjA_VYLqXSVqHA7N2xINpJsYkBNJA8rGs0IPrAo5-1WRY2H4OaEpcyx536JaeLuqCAGJCck8Wz0EsFWOjyWfrhByV70W5buCvlV84hu1ZeqtcTQ1b90a0FjcQHdoKTgjGhFmhaGsnaJYDE2KD0NwdgeVmmvAMtSCbFWT5dnm4f0Wbxx0FeEdsTw.png`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
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
        {
          property: `twitter:image`,
          content: `https://ss.narze.vercel.app/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL21vbm9zb3IuY29tIiwid2lkdGgiOjEyODAsImhlaWdodCI6NzIwLCJkZXZpY2VTY2FsZUZhY3RvciI6MiwiaXNzIjoibW9ub3NvciJ9.QQukBG09fqMYtuGRnKTUdv-JdWQlwUi8DgBCvEtKpIGZlhx_gIdFXu-W17beUiWcX1xob10NmeBkL7xzRButVly8IDmDOLkyVWxx-Fi0pccNK9eLItnPmSErrNFxwHiGUCz1nupmX4E87KxARg6YYG4ZCzXnDejzVgG1ZL1a6X6Zzpd-YyxL4wMNCKvFR0LnbTSOCzdkpR2Sc7l5ETzCkb2JqfLAugA_huqSzfF2ONs6qvheEyJVNsT3VRNJe4dSdpDplC_EQqt8jKYMky-4RfsHPzsZNn0_r2fHD9AHeu0LR-zAuGUdZuWI5sOC72KdH3yGixsLXfjKUtlxus2VbnIk2OFoNYyfQld6O-PH1f7Xj78HobwDGdCNuHcGfY4VJ-n6RV8ui2zX3QNU9YdhApdRJD6bDs2tRp459hdxKa8C_w30b0NJWYtVqXsQTIbMsBHbgIwqlOMiLOZOYOk0AhiOyMLipDJhOjYdJnicXKQbhHAD-ywdyjA_VYLqXSVqHA7N2xINpJsYkBNJA8rGs0IPrAo5-1WRY2H4OaEpcyx536JaeLuqCAGJCck8Wz0EsFWOjyWfrhByV70W5buCvlV84hu1ZeqtcTQ1b90a0FjcQHdoKTgjGhFmhaGsnaJYDE2KD0NwdgeVmmvAMtSCbFWT5dnm4f0Wbxx0FeEdsTw.png`,
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
  )
}

export default SEO
