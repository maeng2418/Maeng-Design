import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface IMeta {
  [key: string]: string;
}

interface ISEOProps {
  lang?: string;
  meta?: IMeta[];
  title?: string;
}

const SEO: React.FC<ISEOProps> = ({ lang = 'kr', meta = [], title }) => {
  const {
    siteUrl: defaultUrl,
    title: defaultTitle,
    description: defaultDesc,
    authorName: defaultAuthor,
    icon: defaultIcon,
  } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            siteUrl
            authorName
            icon
          }
        }
      }
    `,
  ).site.siteMetadata;

  const defaultMeta = [
    { name: `author`, content: defaultAuthor },
    { property: 'og:url', content: defaultUrl },
    { property: 'og:title', content: title || defaultTitle },
    { property: 'og:description', content: defaultDesc },
  ];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title || defaultTitle}
      titleTemplate={title ? `${title} - ${defaultTitle}` : defaultTitle}
      meta={[...defaultMeta, ...meta]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${defaultIcon}` }]}
    />
  );
};

export default SEO;
