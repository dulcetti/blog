import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { themes } from '../styles/themes';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contato" />
      <h1>Contato</h1>
      <AniLink
        cover
        direction="left"
        bg={themes.palette.general.bgTransition}
        duration={0.6}
        to="/">
        Go back to the homepage
      </AniLink>
    </Layout>
  );
}
