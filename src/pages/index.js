import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Profile from '../components/profile';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Profile />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}
