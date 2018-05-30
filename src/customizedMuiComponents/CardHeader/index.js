// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { CardHeader, withStyles } from 'material-ui';
import styles from './styles';

type Props = {
  classes: Object,
}

const CardHeaderCustomized = ({ classes, ...restProps }: Props) => (
  <CardHeader
    {...restProps}
    classes={{
      title: classes.title,
    }}
  />
);

CardHeaderCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(CardHeaderCustomized);
