// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import { generateSearchParams } from '../../enhancers';
import { parameters } from '../../defaults';
import styles from './styles';

type Props = {
  min: number,
  max: number,
  step: number,
  defaultValue: number,
  location: Object,
  history: Object,
  classes: Object,
};

const RangeParam = ({ min, max, step, defaultValue, location, history, classes }: Props) => {
  const numberRange: React.ElementRef<Object> = React.createRef();

  return (
    <React.Fragment>
      <input
        disabled={!location.search}
        className={!location.search ? classes['range-param'] : classes['range-param-hidden']}
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

export default withRouter(injectSheet(styles)(RangeParam));
