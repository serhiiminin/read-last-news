import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const SelectParam = ({ parameters, isMultiple, defaultValue, history, location }) => (
  <select
    multiple={!!isMultiple}
    onChange={event => history.push(`?country=${event.target.value}`)}
    defaultValue={defaultValue}
  >
    {Object.entries(parameters)
        .sort((first, second) => first[1].localeCompare(second[1]))
        .map(([key, value]) => (
          <option value={key} key={key} >{value}</option>
        ))}
  </select>
);

SelectParam.propTypes = {
  parameters: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isMultiple: PropTypes.bool,
  defaultValue: PropTypes.string,
};
SelectParam.defaultProps = {
  parameters: {},
  isMultiple: null,
  defaultValue: null,
};

export default withRouter(SelectParam);
