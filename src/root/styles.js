import Normalize from 'normalize.jss';
import { variables } from '../styles';

const styles = {
  '@global': Normalize,
  'global @font-face': {
    fontFamily: 'KlaberFraktur',
    fontWeight: 400,
    src: `local('KlaberFraktur'),
          local('KlaberFraktur'),
          url(./../fonts/KlaberFraktur.woff2) format('woff2'),
          url(./fonts/KlaberFraktur.woff) format('woff')`,
  },
  '@global body': {
    overflowX: 'hidden',
    color: variables.colors.text,
    fontFamily: 'Verdana, sans-serif',
  },
  root: {
    background: variables.colors.plaster,
    minHeight: '100vh',
    minWidth: '100vw',
  },
};

export default styles;
