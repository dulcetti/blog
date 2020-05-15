import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contato" />
      <h1>Contato</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}
