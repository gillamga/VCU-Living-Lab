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
        <h1>Our Partners</h1>
        <div className="row margin-bottom--5px">
          <div className="col col--12">
            <h2>Industrial Partners</h2>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://www.vcuhealth.org/" style={{ display: 'block' }}>
            <img
              src="/img/VCU/VCU_H_Gold lettering - 4C.png"
              alt="VCU Logo"
              style={{ width: '250px', height: 'auto' }}
            />
          </a>
          <a href="https://caretakermedical.net/" style={{ display: 'block' }}>
            <img
              src="/img/TeamCardImages/caretaker.jpg"
              alt="Caretaker Medical Logo"
              style={{ width: '250px', height: 'auto' }}
            />
          </a>
        </div>

        <div className="row margin-bottom--5px">
          <div className="col col--12">
            <h2>Supporters</h2>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: '2rem' }}>
          <a href="https://www.nsf.gov/" style={{ display: 'block' }}>
            <img
              src="/img/VCU/1019px-NSF_logo.png"
              alt="NSF Logo"
              style={{ width: '250px', height: 'auto' }}
            />
          </a>
        </div>

      </main>
    </Layout>
  );
}
