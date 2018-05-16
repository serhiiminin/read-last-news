// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from 'material-ui';
import { compose } from 'recompose';
import styles from './styles';

const ButtonCustomized = (props: Object) => {
  const { classes } = props;

  return (
    <Button
      {...props}
      classes={{
        root: classes.root,
      }}
    />
  );
};

ButtonCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(ButtonCustomized);