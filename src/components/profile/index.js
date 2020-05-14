import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Profile() {
  const {
    site: {
      siteMetadata: { description, title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
