import { variables } from '../../styles';

const styles = {
  root: {
    width: '100%',
    '&:hover': {
      background: `${variables.colors.actions} !important`,
      color: `${variables.colors.background} !important`,
    },
  },
  selected: {
    background: `${variables.colors.actions} !important`,
    color: `${variables.colors.background} !important`,
  },
};

export default styles;
