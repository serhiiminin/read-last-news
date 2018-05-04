// @flow

import React from 'react';
import { MenuItem } from 'material-ui';
import styles from './styles';

const MenuItemCustomized = (props: Object) => (
  <MenuItem
    {...props}
    {...styles}
  />
);

export default MenuItemCustomized;
