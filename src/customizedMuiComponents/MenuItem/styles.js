import { variables } from '../../styles';

const styles = {
  root: {
    width: '100%',
  },
  style: {
    '&:selected': {
      background: variables.colors.blue,
    },
  },
  touchRippleColor: variables.colors.blue,
};

export default styles;
