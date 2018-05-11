// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import Moment from 'react-moment';
import { CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
import { Card, FlatButton } from './../../customizedMuiComponents';
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
  isLoading: boolean,
  classes: Object,
};

const NewsItem = ({ newsItem, isLoading, classes }: Props) => (
  <div className={`${classes['news-item']} ${isLoading ? classes['news-item-loading'] : ''}`}>
    <Card
      style={{ height: '100%' }}
    >
      <CardHeader
        title={newsItem && newsItem.source && newsItem.source.name}
        subtitle={<Moment date={newsItem && newsItem.publishedAt} format="YYYY/MM/DD, HH:mm" />}
      />
      <CardMedia>
        <img
          className={classes.img}
          src={newsItem && newsItem.urlToImage}
          alt={newsItem && newsItem.title}
        />
      </CardMedia>
      <CardTitle title={newsItem && newsItem.title} />
      <CardText>
        {newsItem && newsItem.description}
      </CardText>
      <CardActions>
        <FlatButton
          label="Read"
          href={newsItem && newsItem.url}
          target="_blank"
        />
      </CardActions>
    </Card>
  </div>
);

NewsItem.propTypes = {
  newsItem: PropTypes.shape({
    autor: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    source: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
  }),
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

NewsItem.defaultProps = {
  newsItem: {},
};

const enhance = compose(
  injectSheet(styles),
);

export default enhance(NewsItem);
