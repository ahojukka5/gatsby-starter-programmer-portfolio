import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import CodeBlock from './src/components/CodeBlock';

const shortcodes = { Link };

const components = {
  pre: CodeBlock,
  Link,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
