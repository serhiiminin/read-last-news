// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Moment from 'react-moment';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles';

type Props = {
  newsItem: {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    source: {
      name: string,
    }
  },
  classes: Object,
};

const NewsItem = ({ newsItem, classes }: Props) => (
  <div className={classes['news-item']}>
    <Card
      style={{ height: '100%' }}
    >
      <CardHeader
        title={newsItem.source.name}
        subtitle={<Moment date={newsItem.publishedAt} format="YYYY/MM/DD, HH:mm" />}
      />
      <CardMedia>
        <img
          className={classes.img}
          src={newsItem.urlToImage}
          alt={newsItem.title}
        />
      </CardMedia>
      <CardTitle title={newsItem.title} />
      <CardText>
        {newsItem.description}
      </CardText>
      <CardActions>
        <FlatButton
          label="Read"
          href={newsItem.url}
          target="_blank"
        />
      </CardActions>
    </Card>
  </div>
);

NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default injectSheet(styles)(NewsItem);
