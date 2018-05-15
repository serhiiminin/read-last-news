// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import Moment from 'react-moment';
import { CardActions, CardHeader, CardMedia, Typography } from 'material-ui';
import { Card, Button } from './../../customizedMuiComponents';
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
      style={isLoading ? styles.cardLoading : styles.card}
    >
      <CardHeader
        title={newsItem && newsItem.source && newsItem.source.name}
        subheader={<Moment date={newsItem && newsItem.publishedAt} format="YYYY/MM/DD, HH:mm" />}
      />
      <CardMedia
        style={isLoading ? styles.loading : {}}
      >
        <img
          className={classes.img}
          src={newsItem && newsItem.urlToImage}
          alt={newsItem && newsItem.title}
        />
      </CardMedia>
      <Typography component="h2">{newsItem && newsItem.title}</Typography>
      <Typography component="p">{newsItem && newsItem.description}</Typography>
      <CardActions>
        <Button
          href={newsItem && newsItem.url}
          target="_blank"
        >Read
        </Button>
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
