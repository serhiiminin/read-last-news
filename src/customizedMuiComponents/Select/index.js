// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { FormControl, Select, withStyles } from 'material-ui';
import { InputLabel } from './../../customizedMuiComponents';
import styles from './styles';

type Props = {
  children: React.Node,
  classes: Object,
  label: string,
  id: string,
}

const SelectCustomized = ({ children, id, label, classes, ...restProps }: Props) => (
  <FormControl className={classes.selectWrapper}>
    <InputLabel htmlFor={label}>{label}</InputLabel>
    <Select
      id={id}
      {...restProps}
      classes={{
        root: classes.root,
        select: classes.select,
        selectMenu: classes.selectMenu,
      }}
    >
      {children}
    </Select>
  </FormControl>
);

SelectCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(SelectCustomized);
