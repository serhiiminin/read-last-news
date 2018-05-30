import variables from '../../styles/variables';

const styles = {
  newsListEmpty: {
    fontStyle: 'italic',
    opacity: '0.5',
  },
  newsList: {
    background: 'transparent',
    display: 'flex',
    flexFlow: 'row wrap',
  },
  newsItem: {
    display: 'flex',
    width: '100%',
    margin: `${variables.margins.no} ${variables.margins.no} ${variables.margins.medium}`,
    padding: variables.paddings.no,
    '@media (min-width: 768px)': {
      width: '100%',
      margin: `${variables.margins.no} ${variables.margins.no} ${variables.margins.medium}`,
    },
    '@media (min-width: 992px)': {
      margin: `${variables.margins.no} ${variables.margins.no} 1% 1%`,
    },
    '@media (min-width: 1200px)': {
      width: '32%',
      margin: `${variables.margins.no} ${variables.margins.no} 1.33% 1.33%`,
    },
  },
};

export default styles;
