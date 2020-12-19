import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  /* overflow: scroll; */

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

theme['plain']['borderRadius'] = 5;

const CodeBlock = props => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const showLineNumbers = props.showLineNumbers;
  console.log(props.children.props.children);
  return (
    <Wrapper>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => {
              if (
                line.length === 1 &&
                line[0].content === '' &&
                i < tokens.length - 1 // skips the ending empty line
              ) {
                line[0].content = ' ';
              }
              if (i == tokens.length - 1) {
                return null;
              }
              return (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  {showLineNumbers && <LineNo>{i + 1}</LineNo>}
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              );
            })}
          </Pre>
        )}
      </Highlight>
    </Wrapper>
  );
};

export default CodeBlock;
