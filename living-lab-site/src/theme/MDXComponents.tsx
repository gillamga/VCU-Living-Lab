import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';

const MDXComponentsWrapper = {
  ...MDXComponents,
  Card: (props: any) => <Card className="card-demo margin-bottom--md" shadow="md" {...props} />,
  CardHeader: (props: any) => <CardHeader {...props} />,
  CardBody: (props: any) => <CardBody {...props} />,
  CardFooter: (props: any) => <CardFooter {...props} />,
  CardImage: (props: any) => <CardImage {...props} />,
};

export default MDXComponentsWrapper;
