import { variables } from '../../styles';

const styles = {
  sidebar: {
    paddingRight: variables.paddings.no,
    '@media (min-width: 768px)': {
      paddingRight: variables.paddings.medium,
    },
  },
  sidebarParamWrapper: {
    padding: `${variables.paddings.medium} ${variables.paddings.no}`,
  },
};

export default styles;
