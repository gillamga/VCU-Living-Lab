import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Card from '../components/Card';
import CardImage from '../components/Card/CardImage';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';

export default function Governance(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Governance"
      description="VCU Living Lab Governance Structure">
      <main className="container margin-vert--lg">
        <h1>Governance</h1>
        <div className="row margin-bottom--5px">
          <div className="col col--12">
            <h2 className="text--left">Program Committee</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/seaman.jpg"
                alt="Dr. Carolyn Seaman"
                title="Dr. Carolyn Seaman"
              />
              <CardBody>
                <h3>Dr. Carolyn Seaman</h3>
                <p>Professor, University of Maryland Baltimore County</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/carolyn-seaman-a03a923/' 
              >
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/bost.jpg"
                alt="Dr. Franklin Bost"
                title="Dr. Franklin Bost"
              />
              <CardBody>
                <h3>Dr. Franklin Bost</h3>
                <p>Principal, StatFive Consulting LLC</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/lfbost-079b025/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/paula.jpg"
                alt="Dr. Paula Ogston-Nobile"
                title="Dr. Paula Ogston-Nobile"
              />
              <CardBody>
                <h3>Dr. Paula Ogston-Nobile</h3>
                <p>Associate Director, Institute for Collaborative Research and Evaluation</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/paula-ogston-nobile-phd-2b328931/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
          <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Tepper.jpg"
                alt="Dr. Gary Tepper"
                title="Dr. Gary Tepper"
              />
              <CardBody>
                <h3>Dr. Gary Tepper</h3>
                <p>Senior associate dean for academic and faculty affairs at the VCU college of engineering</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/gary-tepper-b559b11a1/'>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}
