import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import Card from '../components/Card';
import CardHeader from '../components/Card/CardHeader';
import CardImage from '../components/Card/CardImage';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';

export default function Team(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Team"
      description="VCU Living Lab Team Members">
      <main className="container margin-vert--lg">
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
                <h3>Dr. Rodrigo Spinola</h3>
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
                <h3>Dr. Kostadin Damevski</h3>
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
          <div className="col col--3">
          <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Ahmed.jpg"
                alt="Dr. Irfan Ahmed"
                title="Dr. Irfan Ahmed"
              />
              <CardBody>
                <h3>Dr. Irfan Ahmed</h3>
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
          <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl="/img/TeamCardImages/Leonard.jpg"
                alt="Dr. John Leonard"
                title="Dr. John Leonard"
              />
              <CardBody>
                <h3>Dr. John Leonard</h3>
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
                  <p>Professor and Researcher</p>
                </CardBody>
                <CardFooter>
                  <div className="button-group button-group--block">
                    <a className="button button--secondary" href="#contact">Contact</a>
                  </div>
                </CardFooter>
              </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
                <CardImage
                  cardImageUrl=""
                  alt="Dr. Daniel Falcao"
                  title="Dr. Daniel Falcao"
                />
                <CardBody>
                  <h3>Dr. Daniel Falcao</h3>
                  <p>Professor and Researcher</p>
                </CardBody>
                <CardFooter>
                  <div className="button-group button-group--block">
                    <a className="button button--secondary" href="#contact">Contact</a>
                  </div>
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
                  <p>Professor and Researcher</p>
                </CardBody>
                <CardFooter>
                  <div className="button-group button-group--block">
                    <a className="button button--secondary" href="#contact">Contact</a>
                  </div>
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
                  <p>Professor and Researcher</p>
                </CardBody>
                <CardFooter>
                  <div className="button-group button-group--block">
                    <a className="button button--secondary" href="#contact">Contact</a>
                  </div>
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
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl=""
                alt="Rodrigo Sotolani"
                title="Rodrigo Sotolani"
                />
              <CardBody>
                <h3>Rodrigo Sotolani</h3>
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="col col--3">
            <Card className="card-demo margin-bottom--md" shadow="md">
              <CardImage
                cardImageUrl=""
                alt="Lauren Viado"
                title="Lauren Viado"
                />
              <CardBody>
                <h3>Lauren Viado</h3>
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
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
                <p>Professor and Researcher</p>
              </CardBody>
              <CardFooter>
                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="#contact">Contact</a>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}
