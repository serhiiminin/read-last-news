// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';


type Props = {
  newsItem: {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
  },
  classes: {
    'news-item': string,
  },
};

const NewsItem = ({ newsItem, classes }: Props) => (
  <div className={classes['news-item']}>
    <p>{newsItem.title}</p>
    <p>{newsItem.description}</p>
    <p>{newsItem.url}</p>
    <a href={newsItem.url} target="_blank">
      <img src={newsItem.urlToImage} alt={newsItem.title} />
    </a>
  </div>
);

NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default injectSheet(styles)(NewsItem);
