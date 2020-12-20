import React, { memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CodeBlock from './src/components/CodeBlock';

const components = {
  p: (() => {
    const p = props => (
      <Box my={1}>
        <Typography {...props} variant="body1" color="textPrimary" />
      </Box>
    );
    return memo(p);
  })(),
  h1: (() => {
    const H1 = props => <Typography {...props} variant="h4" />;
    return memo(H1);
  })(),
  h2: (() => {
    const H2 = props => <Typography {...props} variant="h5"/>;
    return memo(H2);
  })(),
  h3: (() => {
    const H3 = props => <Typography {...props} variant="h6"/>;
    return memo(H3);
  })(),
  pre: CodeBlock,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
