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
  classes: Object,
};

const NewsItem = ({ newsItem, classes }: Props) => (
  <div className={classes['news-item']}>
    <div className="img-wrapper">
      <a href={newsItem.url} target="_blank">
        <img className="img" src={newsItem.urlToImage} alt={newsItem.title} />
      </a>
    </div>
    <div className="details">
      <h5 className="title">{newsItem.title}</h5>
      <p className="description">{newsItem.description}</p>
    </div>
  </div>
);

NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default injectSheet(styles)(NewsItem);
