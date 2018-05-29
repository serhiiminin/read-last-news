import { variables } from '../../styles';

const styles = {
  root: {
    width: '100%',
  },
  label: {
    color: `${variables.colors.text} !important`,
  },
  textFieldRoot: {
    '&:after': {
      backgroundColor: `${variables.colors.actions} !important`,
    },
  },
  textFieldInput: {

  },
};

export default styles;
