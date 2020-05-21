require('dotenv').config();
// const queries = require('./src/utils/algolia-queries');

module.exports = {
  siteMetadata: {
    title: 'Bruno Dulcetti | web standards, css, xhtml e tecnologia em geral.',
    description:
      'Blog Pessoal de Bruno Dulcetti - Artigos, tutoriais sobre web standards, xhtml, css e tecnologia em geral.',
    author: '@dulcetti',
    siteUrl: 'https://www.brunodulcetti.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
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
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWith: 980,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-algolia-search`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 10000,
    //     enablePartialUpdates: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bruno Dulcetti`,
        short_name: `Bruno Dulcetti`,
        start_url: `/`,
        background_color: `#38551f`,
        theme_color: `#38551f`,
        display: `minimal-ui`,
        icon: `./static/assets/images/logos/logo-512.png`,
        include_favicon: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
