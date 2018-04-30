import Normalize from 'normalize.jss';
import { variables } from '../styles';

const styles = {
  '@global': Normalize,
  root: {
    background: variables.colors.mist,
    minHeight: '100vh',
    minWidth: '100vw',
  },
};

export default styles;
