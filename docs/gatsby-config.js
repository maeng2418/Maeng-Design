module.exports = {
  siteMetadata: {
    siteUrl: 'https://maeng.design',
    title: 'Maeng Design',
    description: 'This site is for creating Maeng Design System Docs',
    authorName: 'Myeongseong Kim',
    icon: 'static/images/favicon.ico',
    logo: 'static/images/logo.png',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'public/static/images/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
  ],
};
