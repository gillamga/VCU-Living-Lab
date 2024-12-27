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
      title="Team"
      description="VCU Living Lab Team">
      <main className="container margin-vert--lg">
        <h1>Our Team</h1>
        {/* Program Leadership */}
        <div className="row margin-bottom--5px">
          <div className="col col--12">
            <h2 className="text--left">Program Leadership</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Spinola.jpg"
                alt="Dr. Rodrigo Spinola"
                title="Dr. Rodrigo Spinola"
              />
              <CardBody>
                <h3>Dr. Rodrigo Spinola  
                  <span className="badge badge--primary">Director</span>
                </h3>
                <p>Associate professor at VCU, head of technical debt research team</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/rodrigoospinola/' 
                email='spinolaro@vcu.edu'
                websiteUrl='https://www.rodrigospinola.com/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Damevski.jpg"
                alt="Dr. Kostadin Damevski"
                title="Dr. Kostadin Damevski"
              />
              <CardBody>
                <h3>Dr. Kostadin Damevski
                  <span className="badge badge--primary">Program Coordinator</span>
                </h3>
                <p>Associate professor at VCU</p>
              </CardBody>
              <CardFooter
                websiteUrl="https://damevski.github.io/"
                linkedinUrl='https://www.linkedin.com/in/kostadin-damevski-b3414/'>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Researchers */}
        <div className="row margin-bottom--5px margin-top--lg">
          <div className="col col--12">
            <h2 className="text--left">Researchers</h2>
          </div>
        </div>
        <div className="row">

          {/* uncomment the below block when irfan gets involved */}

          {/* <div className="col col--3">
          <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Ahmed.jpg"
                alt="Dr. Irfan Ahmed"
                title="Dr. Irfan Ahmed"
              />
              <CardBody>
                <h3>Dr. Irfan Ahmed</h3>
                <p>Associate professor of cybersecurity at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/irfan-ahmed-5142338/'>
              </CardFooter>
            </Card>
          </div> */}

          <div className="col col--3">
          <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Leonard.jpg"
                alt="Dr. John Leonard"
                title="Dr. John Leonard"
              />
              <CardBody>
                <h3>Dr. John Leonard</h3>
                <p>Professor of computer science at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/johndleonard/'>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Medical Researchers */}
        <div className="row margin-bottom--5px margin-top--lg">
          <div className="col col--12">
            <h2 className="text--left">Medical Researchers</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
                <CardImage
                  cardImageUrl="/img/TeamCardImages/Boyan.jpg"
                  alt="Dr. Barbara Boyan"
                  title="Dr. Barbara Boyan"
                />
                <CardBody>
                  <h3>Dr. Barbara Boyan</h3>
                  <p>Executive director of the VCU institute for engineering and medicine</p>
                </CardBody>
                <CardFooter
                    linkedinUrl='https://www.linkedin.com/in/barbara-d-boyan-91854116/'>
                </CardFooter>
              </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
                <CardImage
                  cardImageUrl="/img/TeamCardImages/Falcao.jpg"
                  alt="Dr. Daniel Falcao"
                  title="Dr. Daniel Falcao"
                />
                <CardBody>
                  <h3>Dr. Daniel Falcao</h3>
                  <p>Associate professor and interim chief of the division of vascular neurology at VCU health</p>
                </CardBody>
                <CardFooter
                  email='daniel.falcao@vcuhealth.org'>
                </CardFooter>
              </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
                <CardImage
                  cardImageUrl="/img/TeamCardImages/Campos.jpg"
                  alt="Dr. Guilherme Campos"
                  title="Dr. Guilherme Campos"
                />
                <CardBody>
                  <h3>Dr. Guilherme Campos</h3>
                  <p>Paul J. Nutter professor of surgery, chairman of the bariatric and 
                  gastrointestinal surgery division at VCU</p>
                </CardBody>
                <CardFooter
                    linkedinUrl='https://www.linkedin.com/in/guilherme-m-campos-md-phd-facs-fasmbs-95627a55/'>
                </CardFooter>
              </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
                <CardImage
                  cardImageUrl="/img/TeamCardImages/Haight.jpg"
                  alt="Dr. Taylor Haight"
                  title="Dr. Taylor Haight"
                />
                <CardBody>
                  <h3>Dr. Taylor Haight</h3>
                  <p>Stroke neurologist at VCU health</p>
                </CardBody>
                <CardFooter
                    linkedinUrl='https://www.linkedin.com/in/taylornhaight/'>
                </CardFooter>
              </Card>
          </div>
        </div>

        {/* Students */}
        <div className="row margin-bottom--5px margin-top--lg">
          <div className="col col--12">
            <h2 className="text--left">Students</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/David.jpg"
                alt="David Ferrufino"
                title="David Ferrufino"
                />
              <CardBody>
                <h3>David Ferrufino</h3>
                <p>PhD grad student at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/david-ferrufino-29354a130/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Sotolani.jpg"
                alt="Rodrigo Sotolani"
                title="Rodrigo Sotolani"
                />
              <CardBody>
                <h3>Rodrigo Sotolani</h3>
                <p>PhD grad student at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/rsotolani/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Miles.jpg"
                alt="Miles Popiela"
                title="Miles Popiela"
                />
              <CardBody>
                <h3>Miles Popiela</h3>
                <p>Masters student at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl="https://www.linkedin.com/in/milespopiela/">
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Adam.jpg"
                alt="Adam Hussein"
                title="Adam Hussein"
                />
              <CardBody>
                <h3>Adam Hussein</h3>
                <p>Undergraduate physics major/computer science and math minnor at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl="https://www.linkedin.com/in/adam-hussein-671472264/">
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Grace.jpg"
                alt="Grace Gillam"
                title="Grace Gillam"
                />
              <CardBody>
                <h3>Grace Gillam</h3>
                <p>Undergraduate computer science major at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl="https://www.linkedin.com/in/grace-gillam/"
                websiteUrl='https://gracegillam.com/Pages/GraceHomepage'
                email='gillamga@vcu.edu'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Lauren.jpg"
                alt="Lauren Viado"
                title="Lauren Viado"
                />
              <CardBody>
                <h3>Lauren Viado</h3>
                <p>Undergraduate computer science major at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl='https://www.linkedin.com/in/lauren-viado/'>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Sam.jpg"
                alt="Samuel Sarzaba"
                title="Samuel Sarzaba"
                />
              <CardBody>
                <h3>Samuel Sarzaba</h3>
                <p>Undergraduate computer science major at VCU</p>
              </CardBody>
              <CardFooter
                linkedinUrl="https://www.linkedin.com/in/samuel-sarzaba/">
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}
