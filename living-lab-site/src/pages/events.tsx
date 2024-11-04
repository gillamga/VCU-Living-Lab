import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Events(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Events"
      description="VCU Living Lab Events">
      <main className="container margin-vert--lg">
        <h1>Events</h1>
        {/* Content will be added here */}
      </main>
    </Layout>
  );
}
