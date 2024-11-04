import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Partners(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Partners"
      description="VCU Living Lab Partners">
      <main className="container margin-vert--lg">
        <h1>Partners</h1>
        {/* Content will be added here */}
      </main>
    </Layout>
  );
}
