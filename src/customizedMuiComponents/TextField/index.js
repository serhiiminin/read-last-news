// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { TextField, withStyles } from 'material-ui';
import styles from './styles';

const TextFieldCustomized = (props: Object) => {
  const { classes } = props;

  return (
    <TextField
      {...props}
      classes={{
        root: classes.root,
      }}
    />
  );
};

TextFieldCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(TextFieldCustomized);
