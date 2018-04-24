// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { generateSearchParams } from '../../enhancers';
import { parameters } from '../../defaults';

type Props = {
  min: number,
  max: number,
  step: number,
  defaultValue: number,
  location: Object,
  history: Object,
};

const RangeParam = ({ min, max, step, defaultValue, location, history }: Props) => (
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    defaultValue={defaultValue}
    onMouseUp={event =>
      history.push(generateSearchParams(location.search, { [parameters.pageSize.paramName]: event.target.value }))}
  />
);

RangeParam.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

export default withRouter(RangeParam);
