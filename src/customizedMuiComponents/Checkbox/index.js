// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Checkbox, FormControlLabel, withStyles } from 'material-ui';
import styles from './styles';

type Props = {
  label: string,
  classes: Object,
  checked: boolean,
}

const CheckboxCustomized = ({ classes, label, checked, ...props }: Props) => (
  <FormControlLabel
    checked
    classes={{
        root: classes.checkboxWrapper,
      }}
    control={
      <Checkbox
        {...props}
        checked={checked}
        classes={{
            root: classes.root,
            checked: classes.checked,
          }}
      />
      }
    label={label}
  />
);

CheckboxCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string.isRequired,
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(CheckboxCustomized);
