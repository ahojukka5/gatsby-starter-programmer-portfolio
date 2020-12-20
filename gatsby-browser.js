import React, { memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Typography from '@material-ui/core/Typography';
import CodeBlock from './src/components/CodeBlock';

const components = {
  h1: (() => {
    const H1 = props => <Typography {...props} component="h1" variant="h1" />;
    return memo(H1);
  })(),
  h2: (() => {
    const H2 = props => <Typography {...props} component="h2" variant="h2" />;
    return memo(H2);
  })(),
  pre: CodeBlock,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
