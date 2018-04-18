import React from 'react';
import PropTypes from 'prop-types';

const SelectParam = ({ parameters }) => (
  <select>
    {Object.entries(parameters)
      .sort((first, second) => first[1].localeCompare(second[1]))
      .map(([key, value]) => (
        <option value={key} key={key} >{value}</option>
    ))}
  </select>
);

SelectParam.propTypes = {
  parameters: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
SelectParam.defaultProps = {
  parameters: {},
};

export default SelectParam;
