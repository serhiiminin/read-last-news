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
    fontFamily: 'Verdana, sans-serif',
  },
  root: {
    background: variables.colors.background,
    minHeight: '100vh',
    minWidth: '100vw',
  },
};

export default styles;
