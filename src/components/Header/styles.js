import { variables } from '../../styles';

const styles = {
  header: {
    padding: `${variables.paddings.medium} ${variables.paddings.no}`,
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyContent: 'space-between',
    '&>div': {
      alignSelf: 'center',
    },
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'auto auto',
    },
  },
  link: {
    color: variables.colors.text,
    textDecoration: 'none',
  },
};

export default styles;
