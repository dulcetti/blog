import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="Sobre" />
      <h1>Sobre</h1>
      <AniLink cover direction="left" bg="#F7F6F1" duration={0.6} to="/">
        Go back to the homepage
      </AniLink>
    </Layout>
  );
}
