// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Radio, FormControlLabel, withStyles } from 'material-ui';
import styles from './styles';

type Props = {
  children: React.Node,
  classes: Object,
  label: string,
}

const RadioCustomized = ({ label, value, ...props }: Props) => {
  const { classes } = props;

  return (
    <FormControlLabel
      label={label}
      value={value}
      checked
      control={
        <Radio
          onChange={() => console.log('sd')}
          {...props}
          classes={{
            root: classes.root,
          }}
        />}
    />
  );
};

RadioCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(RadioCustomized);
