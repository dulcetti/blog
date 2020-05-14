import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search';

export default function SearchPage() {
  return (
    <Layout>
      <SEO title="Busca" />
      <h1>Busca</h1>
      <Search />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}
