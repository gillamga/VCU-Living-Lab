import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Engineering AI Systems',
    description: (
      <>
        Provides participants with the technical software 
        engineering background in the context of AI-enabled systems.
      </>
    ),
  },  
  {
    title: 'AI Applied to Health Systems',
    description: (
      <>
        Equips participants with foundational knowledge 
        and practical skills to develop and implement AI 
        technologies tailored to healthcare environments.
      </>
    ),
  },
  {
    title: 'Cybersecurity Issues',
    description: (
      <>
        Introduces participants to the unique cybersecurity 
        challenges within healthcare systems, emphasizing risk 
        management, data protection, regulatory compliance, and 
        strategies for safeguarding patient information against emerging threats.
      </>
    ),
  },
  {
    title: 'Social Aspects for AI Systems',
    description: (
      <>
        Provides participants with knowledge on various social 
        aspects that AI-enabled systems need to consider, e.g., 
        privacy, ethics, equity, diversity, inclusion (EDI).
      </>
    ),
  },
  {
    title: 'Specialization Courses',
    description: (
      <>
        A curated set of courses in software engineering, AI, 
        cybersecurity, and social aspects designed to deepen the 
        participants' specialization. 
      </>
    ),
  },
  {
    title: 'Industrial Engagement',
    description: (
      <>
        Provides participants with special internship opportunities 
        within our living lab and industrial partners.
      </>
    ),
  },
  {
    title: 'Leadership and Mentorship Training',
    description: (
      <>
      Provides participants with specialized training on the critical
       evaluation of AI-enabled systems and related publications.
      </>
    ),
  },

];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: 'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
