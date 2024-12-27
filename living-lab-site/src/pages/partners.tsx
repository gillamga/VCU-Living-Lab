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
        <h1 className="text--center">Partners</h1>
        <div className="row margin-bottom--5px">
          <div className="col col--12">
            <h2 className="text--center">Industrial Partners</h2>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://www.vcuhealth.org/" style={{ display: 'block' }}>
            <img 
              src="/img/TeamCardImages/vculogo.jpg" 
              alt="VCU Logo" 
              style={{ width: '800px', height: 'auto' }}
            />
          </a>
          <a href="https://caretakermedical.net/" style={{ display: 'block' }}>
            <img 
              src="/img/TeamCardImages/caretaker.jpg" 
              alt="Caretaker Medical Logo" 
              style={{ width: '800px', height: 'auto' }}
            />
          </a>
        </div>

        <div className="row margin-bottom--5px">
          <div className="col col--12">
            <h2 className="text--center">Supporters</h2>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <a href="https://www.nsf.gov/" style={{ display: 'block' }}>
            <img 
              src="/img/TeamCardImages/nsf.jpg" 
              alt="NSF Logo" 
              style={{ width: '800px', height: 'auto' }}
            />
          </a>
        </div>

      </main>
    </Layout>
  );
}
