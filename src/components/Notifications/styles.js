import { variables } from '../../styles';

const styles = {
  notifications: {
    width: '300px',
    height: '0',
    position: 'fixed',
    right: variables.paddings.large,
    top: variables.paddings.medium,
    zIndex: variables.zIndex.notification,
    margin: variables.margins.no,
    padding: variables.paddings.no,
  },
};

export default styles;
