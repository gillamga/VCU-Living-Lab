import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './team.module.css';
import clsx from 'clsx';

export default function Team(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Team"
      description="VCU Living Lab Team Members">
      <main>
        <section>
          <div className="container margin-vert--lg">
            <div className="row">
              <h2 className={clsx('col col--12', styles.section)}>Program Leadership</h2>
              <div className="col col--3 margin-bottom--lg">
                <div className={clsx('card', styles.card)}>
                  <div className={styles.card__image}>
                    {<img src="/img/1661532198803.jpg" alt="Dr. Rodrigo Spinola" />}
                  </div>
                  <div className={styles.card__body}>
                    <h3>
                      Dr. Rodrigo Spinola
                      <span className={styles.badge}>Director</span>
                    </h3>
                    <div>Virginia Commonwealth University</div>
                  </div>
                  <div className="card__footer">
                    <ul className={styles.pills}>
                      <li className={clsx(styles.pills__item, styles.website)}>
                        {/* Add "Learn More" link here. Example:
                        <a target="_blank" href="https://example.com/rodrigo-spinola">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                          </svg>
                          Know more
                        </a> */}
                      </li>
                      <li className={styles.pills__item}>
                        {/* Add LinkedIn link here. Example:
                        <a target="_blank" href="https://www.linkedin.com/in/rodrigo-spinola">
                          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                          </svg>
                        </a> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
