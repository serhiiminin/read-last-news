// @flow

import * as React from 'react';
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

const RangeParam = ({ min, max, step, defaultValue, location, history }: Props) => {
  const numberRange: React.ElementRef<Object> = React.createRef();

  return (
    <React.Fragment>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={event => { numberRange.current.innerHTML = event.target.value; }}
        onMouseUp={event =>
          history.push(generateSearchParams(location.search, { [parameters.pageSize.paramName]: event.target.value }))
        }
      />
      <span ref={numberRange}>{defaultValue}</span>
    </React.Fragment>

  );
};

RangeParam.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

export default withRouter(RangeParam);
