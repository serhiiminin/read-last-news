import { variables } from '../../styles';

const styles = {
  header: {
    padding: `${variables.paddings.medium} ${variables.paddings.no}`,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'space-between',
    '&>div': {
      alignSelf: 'center',
    },
  },
  link: {
    color: variables.colors.text,
    textDecoration: 'none',
  },
};

export default styles;
