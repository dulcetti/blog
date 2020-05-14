import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { GlobalStyle } from '../../styles/reset';
import { Fonts } from '../../styles/fonts';
import { Footer, Header, Svgs } from '../index';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Svgs />
      <GlobalStyle />
      <Fonts />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
