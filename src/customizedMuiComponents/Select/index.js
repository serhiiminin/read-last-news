// @flow

import * as React from 'react';
import { Select } from 'material-ui';
import styles from './styles';

type Props = {
  children: React.Node,
}

const SelectCustomized = ({ children, ...props }: Props) => (
  <Select
    {...props}
    {...styles}
  >
    {children}
  </Select>
);

export default SelectCustomized;
