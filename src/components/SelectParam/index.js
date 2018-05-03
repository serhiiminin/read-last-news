// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { SelectField, MenuItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { variables } from '../../styles';
import styles from './styles';

type Props = {
  parameters: Object,
  defaultValue: string,
  choose: string,
  onChange: Function,
  classes: Object,
  disabled: Boolean
};

const muiTheme = getMuiTheme({
  menuItem: {
    selectedTextColor: variables.colors.blue,
  },
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
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
      </MuiThemeProvider>
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

export default injectSheet(styles)(SelectParam);
