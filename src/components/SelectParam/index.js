// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { SelectField, MenuItem } from 'material-ui';
import { withRouter } from 'react-router-dom';
import { generateSearchParams } from './../../helpers';
import styles from './styles';

type Props = {
  parameterType: string,
  parameters: Object,
  defaultValue: string,
  choose: string,
  history: Object,
  location: Object,
  classes: Object,
};

const SelectParam = (
  { parameterType,
    parameters,
    defaultValue,
    choose,
    history,
    location,
    classes,
  }: Props) => {
  const paramsList: Array<[string, mixed]> = Object.entries(parameters);

  return (
    <div className={classes['select-param']}>
      <SelectField
        floatingLabelText={choose}
        value={defaultValue}
        style={styles['select-param']}
        onChange={(event, index, value) =>
          history.push(generateSearchParams(location.search, { [parameterType]: value }))}
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
  parameterType: PropTypes.string.isRequired,
  parameters: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  defaultValue: PropTypes.string,
  choose: PropTypes.string,
};
SelectParam.defaultProps = {
  defaultValue: null,
  choose: null,
};

export default withRouter(injectSheet(styles)(SelectParam));
