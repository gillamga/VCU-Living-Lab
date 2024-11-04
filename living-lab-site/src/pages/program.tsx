import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Program(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Program"
      description="VCU Living Lab Program Information">
      <main className="container margin-vert--lg">
        <h1>Program</h1>
        {/* Content will be added here */}
      </main>
    </Layout>
  );
}
