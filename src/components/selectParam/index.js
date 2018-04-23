// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { generateSearchParams } from './../../enhancers';

type Props = {
  parameterType: string,
  parameters: Object,
  isMultiple: boolean,
  defaultValue: string,
  history: Object,
  location: Object,
};

const SelectParam = ({ parameterType, parameters, isMultiple, defaultValue, history, location }: Props) => {
  const paramsList: Array<Array<string>> = Object.entries(parameters);

  return (
    <select
      multiple={!!isMultiple}
      onChange={event => history.push(generateSearchParams(location.search, { [parameterType]: event.target.value }))}
      defaultValue={defaultValue}
    >
      {paramsList
        .sort(([, firstValue], [, secondValue]) => firstValue.localeCompare(secondValue))
        .map(([key, value]) => (
          <option value={key} key={key} >{value}</option>
        ))}
    </select>
  );
};

SelectParam.propTypes = {
  parameterType: PropTypes.string.isRequired,
  parameters: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isMultiple: PropTypes.bool,
  defaultValue: PropTypes.string,
};
SelectParam.defaultProps = {
  isMultiple: null,
  defaultValue: null,
};

export default withRouter(SelectParam);
