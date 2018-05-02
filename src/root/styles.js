import Normalize from 'normalize.jss';
import { variables } from '../styles';

const styles = {
  '@global': Normalize,
  '@global body': {
    overflowX: 'hidden',
  },
  root: {
    background: variables.colors.plaster,
    minHeight: '100vh',
    minWidth: '100vw',
  },
};

export default styles;
