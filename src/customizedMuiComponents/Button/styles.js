import { variables } from '../../styles';

const styles = {
  root: {
    background: variables.colors.blue,
    color: variables.colors.background,
    textTransform: 'none',
    '&:hover': {
      background: variables.colors.blue,
      opacity: variables.hover.opacity,
      transition: variables.hover.transition,
    },
  },
};

export default styles;
