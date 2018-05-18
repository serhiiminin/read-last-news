// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Card, withStyles } from 'material-ui';
import styles from './styles';

const CardCustomized = (props: Object) => {
  const { classes } = props;

  return (
    <Card
      {...props}
      classes={{
        root: classes.root,
      }}
    />
  );
};

CardCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(CardCustomized);
