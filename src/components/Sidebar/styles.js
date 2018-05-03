import variables from '../../styles/variables';

const styles = {
  sidebar: {
    padding: '15px 10px 10px 0',
  },
  'modal-wrapper': {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    background: variables.colors.blue,
    color: variables.colors.plaster,
    '&:hover': {
      background: variables.colors.blue,
    },
  },
};

export default styles;
