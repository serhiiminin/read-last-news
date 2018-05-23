import { variables } from '../../styles';

const styles = {
  notification: {
    width: '100%',
    borderRadius: variables.borderRadius.small,
    padding: variables.paddings.medium,
    marginBottom: variables.margins.medium,
    listStyle: 'none',
  },
  error: {
    background: variables.colors.notifications.error,
  },
  success: {
    background: variables.colors.notifications.success,
  },
  warning: {
    background: variables.colors.notifications.warning,
  },
  topLine: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: variables.margins.medium,
  },
  typeText: {
    fontWeight: 'bold',
  },
  closeButton: {
    background: 'transparent',
    color: variables.colors.text,
    padding: 0,
    border: 0,
    borderRadius: '50%',
    transform: 'rotate(45deg)',
    fontSize: '1.2em',
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

export default styles;
