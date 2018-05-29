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
    width: '20%',
  },
  content__main: {
    width: '80%',
  },
};

export default styles;
