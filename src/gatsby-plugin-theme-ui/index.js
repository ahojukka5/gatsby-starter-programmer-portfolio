import theme from '@theme-ui/preset-deep';

export default {
  ...theme,
  colors: {
    text: '#d4d4d4',
    background: '#1e1e1e',
    primary: '#2367c5',
    modes: {
      light: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
      },
    },
  },
  styles: {
    ...theme,
  },
};
