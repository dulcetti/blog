require('dotenv').config();
const queries = require('./src/utils/algolia-queries');

const metadata = {
  author: '@dulcetti',
  description:
    'Blog Pessoal de Bruno Dulcetti - Artigos, tutoriais e dicas sobre DevOps, Front-End, CSS, Agile, Git e Tecnologia em geral.',
  siteUrl: 'https://www.brunodulcetti.com',
  title: 'Bruno Dulcetti | DevOps, Front-End, CSS, Agile, Git e Tecnologia em geral.',
};

const pluginConfig = [
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
        'gatsby-remark-external-links',
        'gatsby-remark-responsive-iframe',
      ],
    },
  },
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Bruno Dulcetti`,
      short_name: `Bruno Dulcetti`,
      start_url: `/`,
      background_color: `#046A2E`,
      theme_color: `#046A2E`,
      display: `minimal-ui`,
      icon: `./static/assets/images/logos/logo-512.png`,
      include_favicon: false,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-netlify-cms`,
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map((edge) => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              });
            });
          },
          query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      fields {
                        slug
                      }
                      frontmatter {
                        date
                        description
                        title
                      }
                    }
                  }
                }
              }
            `,
          output: '/rss.xml',
          title: 'Bruno Dulcetti - Blog',
          link: 'https://feeds.feedburner.com/brunodulcetti',
        },
      ],
    },
  },
];

if (process.env.CONTEXT === 'production') {
  const algolia = {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      queries,
      chunkSize: 10000,
      enablePartialUpdates: true,
    },
  };

  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
      defer: true,
    },
  };

  pluginConfig.push(algolia);
  pluginConfig.push(analytics);
}

module.exports = {
  siteMetadata: metadata,
  plugins: pluginConfig,
};
