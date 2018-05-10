import { variables } from '../../styles';

const styles = {
  header: {
    padding: `${variables.paddings.medium} ${variables.paddings.no}`,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: variables.colors.text,
    textDecoration: 'none',
    fontFamily: 'WalbaumFraktur, sans-serif',
  },
};

export default styles;
