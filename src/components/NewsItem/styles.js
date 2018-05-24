import variables from '../../styles/variables';

const styles = {
  newsItem: {
    margin: `${variables.margins.no} ${variables.margins.no} 1.33% 1.33%`,
    padding: variables.paddings.no,
    width: '32%',
    transition: `all ${variables.timeout.listBlocks}ms ease-in-out`,
    img: {
      display: 'none',
    },
  },
  card: {
    height: '100%',
  },
  cardLoading: {
    minHeight: '200px',
    opacity: '0.8',
  },
  loading: {
    minHeight: '200px',
    background: variables.colors.text,
  },
  entering: {
    opacity: '0',
  },
  entered: {
    opacity: '1',
  },
  exiting: {
    opacity: '0',
  },
  exited: {
    opacity: '0',
  },
};

export default styles;
