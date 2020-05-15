import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="Sobre" />
      <h1>Sobre</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}
