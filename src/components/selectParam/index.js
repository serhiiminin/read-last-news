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
  choose: string,
  history: Object,
  location: Object,
};

const SelectParam = ({ parameterType, parameters, isMultiple, defaultValue, choose, history, location }: Props) => {
  const paramsList: Array<[string, mixed]> = Object.entries(parameters);

  return (
    <select
      multiple={!!isMultiple}
      onChange={event => history.push(generateSearchParams(location.search, { [parameterType]: event.target.value }))}
      defaultValue={defaultValue}
    >
      <option value={choose} disabled>{choose}</option>
      {paramsList
        .sort(([, firstValue], [, secondValue]) =>
          (typeof firstValue === 'string' && typeof secondValue === 'string'
            ? firstValue.localeCompare(secondValue) : 0))
        .map(([key, value]) => (
          <option value={key} key={key} >{typeof value === 'string' ? value : null}</option>
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
  choose: PropTypes.string,
};
SelectParam.defaultProps = {
  isMultiple: null,
  defaultValue: null,
  choose: null,
};

export default withRouter(SelectParam);
