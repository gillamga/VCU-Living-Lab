import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Apply(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Apply"
      description="Apply to VCU Living Lab">
      <main className="container margin-vert--lg">
        <h1>Apply</h1>
        {/* Content will be added here */}
      </main>
    </Layout>
  );
}
