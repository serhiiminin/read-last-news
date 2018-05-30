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
    className={classes.root}
    InputProps={{
      classes: {
        root: classes.textFieldRoot,
        input: classes.textFieldInput,
      },
    }}
    InputLabelProps={{
      className: classes.label,
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
