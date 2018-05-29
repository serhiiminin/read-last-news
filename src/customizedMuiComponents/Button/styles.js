import { variables } from '../../styles';

const styles = {
  root: {
    background: variables.colors.actions,
    color: variables.colors.background,
    textTransform: 'none',
    '&:hover': {
      background: variables.colors.actions,
      opacity: variables.hover.opacity,
      transition: variables.hover.transition,
    },
  },
  disabled: {
    background: variables.colors.actions,
    color: `${variables.colors.background} !important`,
  },
};

export default styles;
