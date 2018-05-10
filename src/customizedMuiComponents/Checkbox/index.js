// @flow

import React from 'react';
import { Checkbox } from 'material-ui';
import styles from './styles';

const CheckboxCustomized = (props: Object) => (
  <Checkbox
    {...props}
    {...styles}
  />
);

export default CheckboxCustomized;
