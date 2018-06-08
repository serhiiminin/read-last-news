import variables from '../styles/variables';

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    '@media (min-width: 768px)': {
      width: '750px',
    },
    '@media (min-width: 992px)': {
      width: '970px',
    },
    '@media (min-width: 1200px)': {
      width: '1170px',
    },
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'auto-flow / 100% 100%',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '40% 60%',
    },
    '@media (min-width: 992px)': {
      gridTemplateColumns: '30% 70%',
    },
    '@media (min-width: 1200px)': {
      gridTemplateColumns: '20% 80%',
    },
  },
  content__sidebar: {
    width: '100%',
    marginBottom: variables.margins.large,
    '@media (min-width: 768px)': {
      marginBottom: variables.margins.no,
    },
  },
  content__main: {
    width: '100%',
  },
};

export default styles;
