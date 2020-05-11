module.exports = {
  siteMetadata: {
    title: 'Bruno Dulcetti | web standards, css, xhtml e tecnologia em geral.',
    description: 'Blog Pessoal de Bruno Dulcetti - Artigos, tutoriais sobre web standards, xhtml, css e tecnologia em geral.',
    author: '@dulcetti',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#38551f`,
        theme_color: `#38551f`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo-512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
