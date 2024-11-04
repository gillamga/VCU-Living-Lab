import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Governance(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Governance"
      description="VCU Living Lab Governance Structure">
      <main className="container margin-vert--lg">
        <h1>Governance</h1>
        {/* Content will be added here */}
      </main>
    </Layout>
  );
}
