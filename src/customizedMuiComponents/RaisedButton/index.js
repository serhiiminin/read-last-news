// @flow

import React from 'react';
import { RaisedButton } from 'material-ui';
import styles from './styles';

const RaisedButtonCustomized = (props: Object) => (
  <RaisedButton
    {...props}
    {...styles}
  />
);

export default RaisedButtonCustomized;
