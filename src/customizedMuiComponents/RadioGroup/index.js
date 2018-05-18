// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { RadioGroup, withStyles } from 'material-ui';
import styles from './styles';

type Props = {
  children: React.Node,
  classes: Object,
  onChange: Function,
}

const RadioGroupCustomized = ({ children, country, onChange, ...props }: Props) => {
  const { classes } = props;

  return (
    <RadioGroup
      aria-label="country"
      name="country"
      value={country}
      onChange={onChange}
    >
      {children}
    </RadioGroup>
  );
};

RadioGroupCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(RadioGroupCustomized);
