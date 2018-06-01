import variables from '../../styles/variables';

const styles = {
  newsItem: {
    width: '100%',
    transition: `all ${variables.timeout.listBlocks}ms ease-in-out`,
    img: {
      display: 'none',
    },
  },
  cardLoading: {
    minHeight: '300px',
    opacity: '.8',
  },
  media: {
    height: '200px',
  },
  mediaLoading: {
    opacity: '0.5',
    minHeight: '200px',
    background: 'transparent',

  },
  entering: {
    opacity: '.8',
  },
  entered: {
    opacity: '1',
  },
  exiting: {
    opacity: '1',
  },
  exited: {
    opacity: '0',
  },
};

export default styles;
