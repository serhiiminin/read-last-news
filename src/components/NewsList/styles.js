import variables from '../../styles/variables';

const styles = {
  newsListEmpty: {
    fontStyle: 'italic',
    opacity: '0.5',
  },
  newsList: {
    background: 'transparent',
    display: 'grid',
    justifyContent: 'space-between',
    alignItems: '',
    gridAutoFlow: 'row',
    gridTemplateColumns: '100%',
    gridTemplateRows: '100%',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '100%',
      margin: `${variables.margins.no} ${variables.margins.no} ${variables.margins.medium}`,
    },
    '@media (min-width: 992px)': {
      gridTemplateColumns: '49% 49%',
      gridColumnGap: '1%',
      gridRowGap: '1%',
    },
    '@media (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridColumnGap: '1%',
      gridRowGap: '5%',
    },
  },
  newsItem: {
    // display: 'flex',
    width: '100%',
    height: '100%',
    // margin: `${variables.margins.no} ${variables.margins.no} ${variables.margins.medium}`,
    padding: variables.paddings.no,
    '@media (min-width: 768px)': {
      width: '100%',
      // margin: `${variables.margins.no} ${variables.margins.no} ${variables.margins.medium}`,
    },
    '@media (min-width: 992px)': {
      // margin: `${variables.margins.no} ${variables.margins.no} 1% 1%`,
    },
    '@media (min-width: 1200px)': {
      // width: '32%',
      // margin: `${variables.margins.no} ${variables.margins.no} 1.33% 1.33%`,
    },
  },
};

export default styles;
