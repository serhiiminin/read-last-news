// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';
import Slider from 'material-ui/Slider';
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
  disabled: boolean,
};

type State = {
  rangeValue: number,
}

class RangeParam extends React.Component<Props, State> {
  state = {
    rangeValue: 0,
  };
  componentWillMount() {
    this.setState({
      rangeValue: this.props.defaultValue,
    });
  }
  render() {
    const { min, max, step, location, history, classes, disabled } = this.props;
    const { rangeValue } = this.state;

    return (
      <div className={!disabled ? classes['range-param'] : classes['range-param-hidden']}>
        <Slider
          min={min}
          max={max}
          step={step}
          value={rangeValue}
          onChange={(event, value) => this.setState({ rangeValue: value })}
          onDragStop={() =>
            history.push(generateSearchParams(location.search, { [parameters.pageSize.paramName]: rangeValue }))}
        />
        <span>{this.state.rangeValue}</span>
      </div>

    );
  }
}

RangeParam.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

export default withRouter(injectSheet(styles)(RangeParam));
