// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { SelectField, MenuItem } from '../../customizedMuiComponents';
// import { MenuItem } from 'material-ui';
import styles from './styles';

type Props = {
  parameters: Object,
  defaultValue: string,
  choose: string,
  onChange: Function,
  classes: Object,
  disabled: Boolean
};

const SelectParam = (
  { parameters,
    defaultValue,
    choose,
    onChange,
    classes,
    disabled,
  }: Props) => {
  const paramsList: Array<[string, mixed]> = Object.entries(parameters);

  return (
    <div className={classes['select-param']}>
      <SelectField
        floatingLabelText={choose}
        value={defaultValue}
        style={styles['select-param']}
        onChange={onChange}
        disabled={disabled}
      >
        {paramsList
          .sort(([, firstValue], [, secondValue]) =>
            (typeof firstValue === 'string' && typeof secondValue === 'string'
              ? firstValue.localeCompare(secondValue) : 0))
          .map(([key, value]) => (
            <MenuItem value={key} primaryText={value} key={key} />
          ))}
      </SelectField>
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
