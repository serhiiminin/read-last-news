// @flow

import React from 'react';
import { Button } from 'material-ui';
import styles from './styles';

const ButtonCustomized = (props: Object) => (
  <Button
    {...props}
    {...styles}
  />
);

export default ButtonCustomized;
