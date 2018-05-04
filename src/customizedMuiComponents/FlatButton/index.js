// @flow

import React from 'react';
import { FlatButton } from 'material-ui';
import styles from './styles';

const FlatButtonCustomized = (props: Object) => (
  <FlatButton
    {...props}
    {...styles}
  />
);

export default FlatButtonCustomized;
