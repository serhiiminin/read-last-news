// @flow

import React from 'react';
import { Checkbox, FormControlLabel } from 'material-ui';
import styles from './styles';

const CheckboxCustomized = (props: Object) => (
  <FormControlLabel
    control={
      <Checkbox
        {...props}
        {...styles}
      />
    }
    label={props.label}
  />
);

export default CheckboxCustomized;
