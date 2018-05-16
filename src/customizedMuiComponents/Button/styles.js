import { variables } from '../../styles';

const styles = {
  root: {
    background: variables.colors.blue,
    color: variables.colors.background,
    '&:hover': {
      background: variables.colors.blue,
    },
  },
};

export default styles;
