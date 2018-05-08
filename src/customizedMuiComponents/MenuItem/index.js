// @flow

import React from 'react';
import { MenuItem } from 'material-ui';
import styles from './styles';

class MenuItemCustomized extends React.Component<Object> {
  static muiName = 'MenuItem';
  render() {
    return (
      <MenuItem
        {...this.props}
        {...styles}
      />
    );
  }
}

export default MenuItemCustomized;
