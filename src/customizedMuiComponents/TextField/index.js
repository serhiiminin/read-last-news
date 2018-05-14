// @flow

import React from 'react';
import { TextField } from 'material-ui';
import styles from './styles';

const TextFieldCustomized = (props: Object) => (
  <TextField
    {...props}
    {...styles}
  />
);

export default TextField;
