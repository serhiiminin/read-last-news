// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { Select, MenuItem } from '../../customizedMuiComponents';
import styles from './styles';

type Props = {
  parameters: Object,
  defaultValue: string,
  choose: string,
  onChange: Function,
  classes: Object,
  disabled: Boolean
};

const SelectParam = ({ parameters, defaultValue, choose, onChange, classes, disabled }: Props) => {
  const paramsList: Array<[string, mixed]> = Object.entries(parameters);

  return (
    <div className={classes['select-param']}>
      <Select
        id={defaultValue}
        label={choose}
        value={defaultValue}
        onChange={onChange}
        disabled={disabled}
      >
        {paramsList
          .sort(([, firstValue], [, secondValue]) =>
            (typeof firstValue === 'string' && typeof secondValue === 'string'
              ? firstValue.localeCompare(secondValue) : 0))
          .map(([key, value]) => (
            <MenuItem value={key} key={key} >{value}</MenuItem>
          ))}
      </Select>
    </div>
  );
};

SelectParam.propTypes = {
  parameters: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  defaultValue: PropTypes.string,
  choose: PropTypes.string,
  disabled: PropTypes.bool,
};
SelectParam.defaultProps = {
  defaultValue: null,
  choose: null,
  disabled: false,
};

const enhance = compose(
  injectSheet(styles),
);

export default enhance(SelectParam);
