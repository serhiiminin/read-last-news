// @flow

import React from 'react';
import { Card } from 'material-ui';
import styles from './styles';

const CardCustomized = (props: Object) => (
  <Card
    {...props}
    {...styles}
  />
);

export default CardCustomized;
