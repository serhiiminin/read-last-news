// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { InputLabel, withStyles } from 'material-ui';
import styles from './styles';

type Props = {
  children: React.Node,
  classes: Object,
  label: string,
  id: string,
}

const CustomizedInputLabel = ({ children, classes, ...restProps }: Props) => (
  <InputLabel
    {...restProps}
    classes={{
      root: classes.root,
      animated: classes.animated,
    }}
  >
    {children}
  </InputLabel>
);

CustomizedInputLabel.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(CustomizedInputLabel);
