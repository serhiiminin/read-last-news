import Normalize from 'normalize.jss';
import { variables } from '../styles';

const styles = {
  '@global': Normalize,
  'global @font-face': {
    fontFamily: 'WalbaumFraktur',
    fontWeight: 400,
    src: `local('WalbaumFraktur'),
          local('WalbaumFraktur'),
          url(./../fonts/WalbaumFraktur.woff2) format('woff2'),
          url(./../fonts/WalbaumFraktur.woff) format('woff')`,
  },
  '@global body': {
    overflowX: 'hidden',
    color: variables.colors.text,
    fontFamily: 'Courier, sans-serif',
    position: 'relative',
    boxSizing: 'border-box',
  },
  '@global *': {
    boxSizing: 'border-box',
    fontFamily: 'Courier, sans-serif !important',
  },
  root: {
    background: variables.colors.background,
    minHeight: '100vh',
    padding: `${variables.paddings.no} ${variables.paddings.medium}`,
    '@media (min-width: 768px)': {
      padding: variables.paddings.no,
    },
  },
};

export default styles;
