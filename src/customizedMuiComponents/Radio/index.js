// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Radio, FormControlLabel, withStyles } from 'material-ui';
import styles from './styles';

type Props = {
  classes: Object,
  label: string,
  value: string,
  checked: boolean,
  onChange: Function,
}

const RadioCustomized = ({ label, value, classes, onChange, checked }: Props) => (
  <FormControlLabel
    label={label}
    value={value}
    control={
      <Radio
        checked={checked}
        onChange={onChange}
        classes={{
            root: classes.root,
            checked: classes.checked,
          }}
      />}
  />
);

RadioCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(RadioCustomized);
