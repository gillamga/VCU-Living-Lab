import React from 'react';
import MDXComponents from '@theme/MDXComponents';
import { MDXProvider } from '@mdx-js/react';

// A wrapper to provide MDXComponents to all MDX content
export default function MDXWrapper({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
}
