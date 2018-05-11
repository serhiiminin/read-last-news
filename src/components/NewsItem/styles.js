import variables from '../../styles/variables';

const styles = {
  'news-item': {
    margin: `${variables.margins.no} ${variables.margins.no} 1.33% 1.33%`,
    padding: variables.paddings.no,
    width: '32%',
    transition: 'all .2s ease-in-out',
    img: {
      display: 'none',
    },
  },
  'news-item-loading': {
    opacity: '0.8',
  },
};

export default styles;
