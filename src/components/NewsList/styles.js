import variables from '../../styles/variables';

const styles = {
  newsListEmpty: {
    fontStyle: 'italic',
    opacity: '0.5',
  },
  newsList: {
    background: 'transparent',
    display: 'grid',
    rowGap: '.5rem',
    gridTemplateColumns: '1fr',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr',
      columnGap: '.5rem',
      rowGap: '.5rem',
      margin: `${variables.margins.no} ${variables.margins.no} ${variables.margins.medium}`,
    },
    '@media (min-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(300px, auto)',
    },
  },
  newsItem: {
    display: 'grid',
    padding: variables.paddings.no,
  },
};

export default styles;
