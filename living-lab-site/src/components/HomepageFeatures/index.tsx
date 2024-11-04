import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Research and Innovation',
    description: (
      <>
        The LL provides students and researchers with access to state-of-the-art
        technology and an environment that facilitates learning, idea-sharing, 
        and the development of new technologies for health field applications. 
      </>
    ),
  },  
  {
    title: 'Workshops, Seminars, Internships',
    description: (
      <>
        The lab will host talks from industry specialists and workshops where students
        will be encouraged to hone their professional skills. It will also offer 
        semester-long internships for students interested in health systems development, 
        allowing them to develop a product for a client in tandem with their studies 
        and gain hands-on system development expereince.
      </>
    ),
  },
  {
    title: 'Curriculum Integration',
    description: (
      <>
        Two new courses on health systems engineering will be introduced to 
        the VCU curriculum, with focuses on the role of machine learning in
        the future of the field, and how to produce, maintain, and expand
        upon engineered health system tools.
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
