import { variables } from '../../styles';

const styles = {
  root: {
    width: '100%',
  },
  style: {
    '&:selected': {
      background: variables.colors.actions,
    },
  },
  touchRippleColor: variables.colors.actions,
};

export default styles;
