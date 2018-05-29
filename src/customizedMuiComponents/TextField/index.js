// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { TextField, withStyles } from 'material-ui';
import styles from './styles';

type Props = {
  classes: Object,
}

const TextFieldCustomized = ({ classes, ...restProps }: Props) => (
  <TextField
    {...restProps}
    classes={{
      root: classes.root,
    }}
  />
);

TextFieldCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(TextFieldCustomized);
