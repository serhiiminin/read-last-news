// @flow

import * as React from 'react';
import { SelectField } from 'material-ui';
import styles from './styles';

type Props = {
  children: React.Node,
}

const SelectFieldCustomized = ({ children, ...props }: Props) => (
  <SelectField
    {...props}
    {...styles}
  >
    <React.Fragment>
      {children}
    </React.Fragment>
  </SelectField>
);

export default SelectFieldCustomized;
