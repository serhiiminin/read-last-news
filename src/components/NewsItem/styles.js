import { variables } from '../../styles';

const styles = {
  'news-item': {
    padding: '5px',
    margin: '10px',
    width: '250px',
    background: variables.colors.sky,
    '& .img-wrapper': {

    },
    '& .img': {
      maxWidth: '100%',
    },
    '& p': {
      margin: '5px 0',
    },
    '& .title': {
      margin: '0',
    },
  },
};

export default styles;
