// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Checkbox, FormControlLabel, withStyles } from 'material-ui';
import styles from './styles';

const CheckboxCustomized = (props: Object) => {
  const { classes } = props;

  return (
    <FormControlLabel
      classes={{
        root: classes.formControl,
      }}
      control={
        <Checkbox
          {...props}
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      }
      label={props.label}
    />
  );
};

CheckboxCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string.isRequired,
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(CheckboxCustomized);
