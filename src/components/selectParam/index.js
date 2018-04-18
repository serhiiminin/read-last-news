import React from 'react';
import PropTypes from 'prop-types';

const SelectParam = ({ parameters, isMultiple }) => (
  <select multiple={!!isMultiple}>
    {Object.entries(parameters)
      .sort((first, second) => first[1].localeCompare(second[1]))
      .map(([key, value]) => (
        <option value={key} key={key} >{value}</option>
    ))}
  </select>
);

SelectParam.propTypes = {
  parameters: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  isMultiple: PropTypes.bool,
};
SelectParam.defaultProps = {
  parameters: {},
  isMultiple: null,
};

export default SelectParam;
