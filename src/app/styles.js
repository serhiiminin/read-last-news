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
    display: 'flex',
    flexFlow: 'row wrap',
  },
  content__sidebar: {
    width: '100%',
    marginBottom: variables.margins.large,
    '@media (min-width: 768px)': {
      width: '40%',
      marginBottom: variables.margins.no,
    },
    '@media (min-width: 992px)': {
      width: '30%',
    },
    '@media (min-width: 1200px)': {
      width: '20%',
    },
  },
  content__main: {
    width: '100%',
    '@media (min-width: 768px)': {
      width: '60%',
    },
    '@media (min-width: 992px)': {
      width: '70%',
    },
    '@media (min-width: 1200px)': {
      width: '80%',
    },
  },
};

export default styles;
